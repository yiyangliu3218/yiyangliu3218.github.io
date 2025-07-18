import React, { useState, useEffect, useRef } from 'react';

const MyFootprintMap = () => {
  const mapRef = useRef(null);
  const searchInputRef = useRef(null);
  const [map, setMap] = useState(null);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isAddPanelExpanded, setIsAddPanelExpanded] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [newLocation, setNewLocation] = useState({ 
    name: '', 
    description: '', 
    lat: null, 
    lng: null,
    address: '',
    placeId: '',
    visitDate: new Date().toISOString().split('T')[0],
    companions: [],
    newCompanion: ''
  });
  const [markers, setMarkers] = useState([]);
  const [placesService, setPlacesService] = useState(null);
  const [autocompleteService, setAutocompleteService] = useState(null);

  // 初始化地图
  useEffect(() => {
    console.log('Initializing map...');
    console.log('Google Maps available:', !!window.google);
    
    if (!window.google) {
      console.log('Google Maps API 未加载');
      return;
    }

    console.log('Google Maps Places available:', !!window.google.maps.places);

    const mapInstance = new window.google.maps.Map(mapRef.current, {
      center: { lat: 39.9042, lng: 116.4074 }, // 北京
      zoom: 3,
      styles: [
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{ "color": "#193341" }]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [{ "color": "#2c5234" }]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{ "color": "#29768a" }, { "lightness": -37 }]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{ "color": "#406d80" }]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{ "color": "#406d80" }]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            { "visibility": "on" },
            { "color": "#3e606f" },
            { "weight": 2 },
            { "gamma": 0.84 }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{ "color": "#ffffff" }]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [{ "weight": 0.6 }, { "color": "#1a3541" }]
        },
        {
          "elementType": "labels.icon",
          "stylers": [{ "visibility": "off" }]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{ "color": "#2c5234" }]
        }
      ],
      disableDefaultUI: false,
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: true,
      rotateControl: true,
      fullscreenControl: true
    });

    console.log('Map created successfully');
    setMap(mapInstance);

    // 初始化 Places Service
    if (window.google.maps.places) {
      const places = new window.google.maps.places.PlacesService(mapInstance);
      const autocomplete = new window.google.maps.places.AutocompleteService();
      
      console.log('Places services initialized');
      console.log('PlacesService:', !!places);
      console.log('AutocompleteService:', !!autocomplete);
      
      setPlacesService(places);
      setAutocompleteService(autocomplete);
    } else {
      console.error('Google Maps Places library not loaded!');
    }

    return () => {
      markers.forEach(marker => marker.setMap(null));
    };
  }, []);

  // 更新地图上的标记
  useEffect(() => {
    if (!map) return;

    // 清除现有标记
    markers.forEach(marker => marker.setMap(null));

    // 创建新标记
    const newMarkers = locations.map(location => {
      const marker = new window.google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.name,
        icon: {
          url: createCustomIcon(location.visits),
          scaledSize: new window.google.maps.Size(getMarkerSize(location.visits), getMarkerSize(location.visits)),
          anchor: new window.google.maps.Point(getMarkerSize(location.visits)/2, getMarkerSize(location.visits)/2)
        },
        animation: window.google.maps.Animation.DROP
      });

      // 创建信息窗口
      const companionsText = location.companions && location.companions.length > 0 
        ? `<p style="margin: 0 0 8px 0; color: #64748b; font-size: 13px;">👥 同行: ${location.companions.join(', ')}</p>`
        : '';

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 12px; font-family: system-ui; max-width: 280px;">
            <h3 style="margin: 0 0 8px 0; color: #1a202c; font-size: 16px; font-weight: 600;">
              ${location.name}
            </h3>
            <p style="margin: 0 0 8px 0; color: #64748b; font-size: 12px;">
              📍 ${location.address}
            </p>
            <p style="margin: 0 0 8px 0; color: #64748b; font-size: 14px;">
              ${getStarEmoji(location.visits)} ${location.visits} 次访问
            </p>
            <p style="margin: 0 0 8px 0; color: #64748b; font-size: 12px;">
              📅 ${location.visitDate || location.date}
            </p>
            ${companionsText}
            ${location.description ? `
              <p style="margin: 0; color: #374151; font-size: 13px; line-height: 1.4;">
                ${location.description}
              </p>
            ` : ''}
          </div>
        `
      });

      marker.addListener('click', () => {
        // 关闭其他信息窗口
        newMarkers.forEach(m => m.infoWindow && m.infoWindow.close());
        
        infoWindow.open(map, marker);
        setSelectedLocation(location);
        
        // 平滑移动到选中位置
        map.panTo({ lat: location.lat, lng: location.lng });
        if (map.getZoom() < 12) {
          map.setZoom(12);
        }
      });

      marker.infoWindow = infoWindow;
      return marker;
    });

    setMarkers(newMarkers);
  }, [locations, map]);

  // 搜索地点
  const searchPlaces = (query) => {
    console.log('Searching for:', query);
    
    if (!query.trim()) {
      console.log('Empty query, skipping search');
      return;
    }
    
    if (!autocompleteService) {
      console.error('AutocompleteService not available');
      setSearchResults([{
        place_id: 'error',
        description: '搜索服务不可用 - 请检查 Google Maps API',
        structured_formatting: {
          main_text: '服务错误',
          secondary_text: '请检查 API 配置'
        }
      }]);
      return;
    }

    setIsSearching(true);
    
    autocompleteService.getPlacePredictions(
      {
        input: query,
        types: ['establishment', 'geocode'],
        language: 'zh-CN'
      },
      (predictions, status) => {
        console.log('Search status:', status);
        console.log('Predictions:', predictions);
        
        setIsSearching(false);
        
        if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
          console.log('Search successful, found', predictions.length, 'results');
          setSearchResults(predictions.slice(0, 5));
        } else {
          console.error('Search failed with status:', status);
          setSearchResults([{
            place_id: 'error',
            description: `搜索失败: ${status}`,
            structured_formatting: {
              main_text: '搜索出错',
              secondary_text: '请稍后重试或检查网络连接'
            }
          }]);
        }
      }
    );
  };

  // 处理搜索输入
  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 2) {
      searchPlaces(query);
    } else {
      setSearchResults([]);
    }
  };

  // 选择搜索结果
  const selectSearchResult = (prediction) => {
    if (!placesService) {
      console.log('Places service not available');
      return;
    }

    console.log('Selecting place:', prediction.description);

    placesService.getDetails(
      {
        placeId: prediction.place_id,
        fields: ['name', 'geometry', 'formatted_address', 'place_id']
      },
      (place, status) => {
        console.log('Place details status:', status);
        console.log('Place details:', place);
        
        if (status === window.google.maps.places.PlacesServiceStatus.OK && place && place.geometry) {
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          
          console.log('Setting new location:', {
            name: place.name,
            lat,
            lng,
            address: place.formatted_address
          });
          
          setNewLocation(prev => ({
            ...prev,
            name: place.name || prediction.structured_formatting.main_text,
            lat: lat,
            lng: lng,
            address: place.formatted_address || prediction.description,
            placeId: place.place_id
          }));
          setShowAddForm(true);
          setSearchResults([]);
          setSearchQuery('');
          
          // 移动地图到选中位置
          if (map) {
            map.panTo(place.geometry.location);
            map.setZoom(14);
          }
        } else {
          console.error('Failed to get place details:', status);
          // 备用方案：使用预测结果的信息
          setNewLocation(prev => ({
            ...prev,
            name: prediction.structured_formatting.main_text,
            lat: null,
            lng: null,
            address: prediction.description,
            placeId: prediction.place_id
          }));
          setShowAddForm(true);
          setSearchResults([]);
          setSearchQuery('');
        }
      }
    );
  };

  // 添加同行人员
  const addCompanion = () => {
    if (newLocation.newCompanion.trim()) {
      setNewLocation(prev => ({
        ...prev,
        companions: [...prev.companions, prev.newCompanion.trim()],
        newCompanion: ''
      }));
    }
  };

  // 删除同行人员
  const removeCompanion = (index) => {
    setNewLocation(prev => ({
      ...prev,
      companions: prev.companions.filter((_, i) => i !== index)
    }));
  };

  // 添加位置
  const addLocation = () => {
    console.log('Adding location:', newLocation);
    
    if (!newLocation.name.trim()) {
      alert('请输入地点名称');
      return;
    }
    
    // 如果没有坐标，尝试使用地理编码
    if (!newLocation.lat || !newLocation.lng) {
      console.log('No coordinates, trying geocoding for:', newLocation.address);
      
      if (window.google && window.google.maps && window.google.maps.Geocoder) {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode(
          { address: newLocation.address || newLocation.name },
          (results, status) => {
            if (status === 'OK' && results[0]) {
              const location = results[0].geometry.location;
              const finalLocation = {
                id: Date.now(),
                name: newLocation.name,
                description: newLocation.description,
                lat: location.lat(),
                lng: location.lng(),
                address: newLocation.address || results[0].formatted_address,
                placeId: newLocation.placeId,
                visitDate: newLocation.visitDate,
                companions: newLocation.companions,
                visits: 1,
                date: newLocation.visitDate
              };
              
              console.log('Adding geocoded location:', finalLocation);
              setLocations(prev => [...prev, finalLocation]);
              resetNewLocation();
              setShowAddForm(false);
            } else {
              console.error('Geocoding failed:', status);
              alert('无法获取地点坐标，请重新搜索');
            }
          }
        );
      } else {
        alert('地图服务不可用，请重新搜索地点');
      }
      return;
    }
    
    const location = {
      id: Date.now(),
      name: newLocation.name,
      description: newLocation.description,
      lat: newLocation.lat,
      lng: newLocation.lng,
      address: newLocation.address,
      placeId: newLocation.placeId,
      visitDate: newLocation.visitDate,
      companions: newLocation.companions,
      visits: 1,
      date: newLocation.visitDate
    };
    
    console.log('Adding location with coordinates:', location);
    setLocations(prev => [...prev, location]);
    resetNewLocation();
    setShowAddForm(false);
  };

  // 重置新位置表单
  const resetNewLocation = () => {
    setNewLocation({ 
      name: '', 
      description: '', 
      lat: null, 
      lng: null, 
      address: '', 
      placeId: '',
      visitDate: new Date().toISOString().split('T')[0],
      companions: [],
      newCompanion: ''
    });
  };

  // 创建自定义图标
  const createCustomIcon = (visits) => {
    const size = getMarkerSize(visits);
    const color = getMarkerColor(visits);
    
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 2}" fill="${color}" stroke="#ffffff" stroke-width="3" filter="url(#glow)"/>
        <text x="${size/2}" y="${size/2 + 4}" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="${size/3}" font-weight="bold">
          ${visits}
        </text>
      </svg>
    `)}`;
  };

  const getMarkerSize = (visits) => {
    return Math.min(25 + visits * 8, 45);
  };

  const getMarkerColor = (visits) => {
    if (visits >= 3) return '#FFD700'; // 金色
    if (visits >= 2) return '#FF6B35'; // 橙色
    return '#00D4FF'; // 蓝色
  };

  const getStarEmoji = (visits) => {
    return '⭐'.repeat(Math.min(visits, 5));
  };

  const incrementVisits = (id) => {
    setLocations(prev => prev.map(loc => 
      loc.id === id 
        ? { ...loc, visits: loc.visits + 1, date: new Date().toISOString().split('T')[0] }
        : loc
    ));
    if (selectedLocation?.id === id) {
      setSelectedLocation(prev => ({ ...prev, visits: prev.visits + 1 }));
    }
  };

  const deleteLocation = (id) => {
    setLocations(prev => prev.filter(loc => loc.id !== id));
    if (selectedLocation?.id === id) {
      setSelectedLocation(null);
    }
  };

  const flyToLocation = (location) => {
    if (map) {
      map.panTo({ lat: location.lat, lng: location.lng });
      map.setZoom(14);
      setSelectedLocation(location);
    }
  };

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      backgroundColor: '#f8fafc',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* 左侧面板 */}
      <div style={{ 
        width: isSidebarCollapsed ? '60px' : '380px', 
        backgroundColor: 'white', 
        borderRight: '1px solid #e2e8f0',
        overflowY: 'auto',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.3s ease'
      }}>
        {/* 收缩/展开按钮 */}
        <div style={{
          padding: '16px',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: isSidebarCollapsed ? 'center' : 'space-between'
        }}>
          {!isSidebarCollapsed && (
            <h1 style={{ 
              color: '#1a202c', 
              fontSize: '20px', 
              margin: 0,
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              🔍 足迹地图
            </h1>
          )}
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            style={{
              padding: '8px',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              cursor: 'pointer',
              color: '#64748b',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f1f5f9';
              e.target.style.color = '#1a202c';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#f8fafc';
              e.target.style.color = '#64748b';
            }}
          >
            <span style={{ 
              fontSize: '16px',
              transform: isSidebarCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}>
              ◀
            </span>
          </button>
        </div>

        {/* 收缩状态下的小图标 */}
        {isSidebarCollapsed ? (
          <div style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            {/* 添加按钮 */}
            <button
              onClick={() => setShowAddForm(true)}
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#2563eb';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#3b82f6';
                e.target.style.transform = 'scale(1)';
              }}
              title="添加新地点"
            >
              +
            </button>
            
            {/* 地点数量指示器 */}
            {locations.length > 0 && (
              <div style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#f8fafc',
                border: '2px solid #e2e8f0',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: '600',
                color: '#64748b'
              }}>
                {locations.length}
              </div>
            )}

            {/* 地点列表（小圆点） */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
              {locations.slice(0, 6).map(location => (
                <div
                  key={location.id}
                  onClick={() => flyToLocation(location)}
                  style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: getMarkerColor(location.visits),
                    borderRadius: '50%',
                    cursor: 'pointer',
                    border: selectedLocation?.id === location.id ? '2px solid #1a202c' : '2px solid white',
                    transition: 'all 0.2s ease'
                  }}
                  title={location.name}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              ))}
              {locations.length > 6 && (
                <div style={{
                  fontSize: '12px',
                  color: '#64748b',
                  marginTop: '4px'
                }}>
                  +{locations.length - 6}
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            {/* 展开状态下的完整内容 */}
            <div style={{ padding: '0 24px 24px 24px' }}>
              <p style={{ color: '#64748b', fontSize: '14px', margin: '0 0 20px 0' }}>
                {locations.length === 0 ? '开始搜索并添加你的第一个地点' : `已探索 ${locations.length} 个目的地`}
              </p>
            </div>

            {/* 可折叠的添加面板 */}
            <div style={{ 
              margin: '0 24px 24px 24px',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              backgroundColor: '#f8fafc'
            }}>
              {/* 面板头部 */}
              <div 
                onClick={() => setIsAddPanelExpanded(!isAddPanelExpanded)}
                style={{
                  padding: '16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: isAddPanelExpanded ? '1px solid #e2e8f0' : 'none',
                  borderRadius: isAddPanelExpanded ? '12px 12px 0 0' : '12px',
                  backgroundColor: 'white',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '18px' }}>📍</span>
                  <span style={{ fontWeight: '600', color: '#1a202c' }}>添加新足迹</span>
                </div>
                <span style={{ 
                  fontSize: '14px', 
                  color: '#64748b',
                  transform: isAddPanelExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease'
                }}>
                  ▼
                </span>
              </div>

              {/* 可展开的内容 */}
              {isAddPanelExpanded && (
                <div style={{ padding: '16px', backgroundColor: 'white', borderRadius: '0 0 12px 12px' }}>
                  {/* 搜索框 */}
                  <div style={{ position: 'relative', marginBottom: '16px' }}>
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchInput}
                      placeholder="搜索地点... (例如: 埃菲尔铁塔)"
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 36px',
                        backgroundColor: '#f8fafc',
                        border: '2px solid #e2e8f0',
                        borderRadius: '8px',
                        color: '#1a202c',
                        fontSize: '14px',
                        transition: 'border-color 0.2s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                      }}
                      onBlur={(e) => {
                        setTimeout(() => {
                          if (!e.target.matches(':focus')) {
                            e.target.style.borderColor = '#e2e8f0';
                          }
                        }, 200);
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#64748b',
                      fontSize: '14px'
                    }}>
                      🔍
                    </div>
                    {isSearching && (
                      <div style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#3b82f6',
                        fontSize: '11px'
                      }}>
                        搜索中...
                      </div>
                    )}
                    
                    {/* API状态提示 */}
                    {!window.google && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        backgroundColor: '#fef2f2',
                        border: '1px solid #fecaca',
                        borderRadius: '6px',
                        padding: '6px 10px',
                        fontSize: '11px',
                        color: '#dc2626',
                        marginTop: '4px'
                      }}>
                        ⚠️ Google Maps API 未加载
                      </div>
                    )}
                  </div>

                  {/* 搜索结果 */}
                  {searchResults.length > 0 && (
                    <div style={{
                      backgroundColor: '#f8fafc',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      marginBottom: '16px',
                      maxHeight: '160px',
                      overflowY: 'auto'
                    }}>
                      {searchResults.map((result, index) => (
                        <div
                          key={result.place_id}
                          onClick={() => result.place_id !== 'error' && selectSearchResult(result)}
                          style={{
                            padding: '10px 12px',
                            cursor: result.place_id !== 'error' ? 'pointer' : 'default',
                            borderBottom: index < searchResults.length - 1 ? '1px solid #f1f5f9' : 'none',
                            transition: 'background-color 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            if (result.place_id !== 'error') {
                              e.target.style.backgroundColor = '#f1f5f9';
                            }
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                          }}
                        >
                          <div style={{ fontSize: '13px', fontWeight: '500', color: '#1a202c', marginBottom: '2px' }}>
                            {result.structured_formatting.main_text}
                          </div>
                          <div style={{ fontSize: '11px', color: '#64748b' }}>
                            {result.structured_formatting.secondary_text}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 快捷添加按钮 */}
                  <button
                    onClick={() => setShowAddForm(true)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#2563eb';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#3b82f6';
                    }}
                  >
                    + 手动添加地点
                  </button>
                </div>
              )}
            </div>

            {/* 已添加的地点 */}
            <div style={{ flex: 1, padding: '0 24px 24px 24px' }}>
              {locations.length > 0 ? (
                <>
                  <h3 style={{ 
                    color: '#1a202c', 
                    marginBottom: '16px', 
                    fontSize: '16px',
                    fontWeight: '600'
                  }}>
                    我的足迹
                  </h3>
                  <div style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                    {locations.map(location => (
                      <div
                        key={location.id}
                        onClick={() => flyToLocation(location)}
                        style={{
                          padding: '16px',
                          backgroundColor: selectedLocation?.id === location.id ? '#eff6ff' : '#f8fafc',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          marginBottom: '8px',
                          border: selectedLocation?.id === location.id ? '2px solid #3b82f6' : '1px solid #e2e8f0',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          if (selectedLocation?.id !== location.id) {
                            e.target.style.backgroundColor = '#f1f5f9';
                            e.target.style.borderColor = '#cbd5e1';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (selectedLocation?.id !== location.id) {
                            e.target.style.backgroundColor = '#f8fafc';
                            e.target.style.borderColor = '#e2e8f0';
                          }
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h4 style={{ 
                            color: '#1a202c', 
                            margin: 0, 
                            fontSize: '15px',
                            fontWeight: '600'
                          }}>
                            {location.name}
                          </h4>
                          <div style={{ 
                            backgroundColor: getMarkerColor(location.visits),
                            color: 'white',
                            padding: '2px 8px',
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: '600'
                          }}>
                            {location.visits}x
                          </div>
                        </div>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                          <span style={{ fontSize: '12px' }}>
                            {getStarEmoji(location.visits)}
                          </span>
                        </div>
                        
                        <p style={{ 
                          color: '#64748b', 
                          fontSize: '11px', 
                          margin: '0 0 4px 0',
                          lineHeight: '1.3'
                        }}>
                          📍 {location.address}
                        </p>
                        
                        <p style={{ 
                          color: '#64748b', 
                          fontSize: '12px', 
                          margin: '0 0 4px 0',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          📅 {location.visitDate || location.date}
                        </p>

                        {/* 同行人员 */}
                        {location.companions && location.companions.length > 0 && (
                          <p style={{ 
                            color: '#64748b', 
                            fontSize: '11px', 
                            margin: 0,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}>
                            👥 {location.companions.join(', ')}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div style={{
                  textAlign: 'center',
                  padding: '40px 20px',
                  color: '#64748b'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🌍</div>
                  <h3 style={{ color: '#374151', marginBottom: '8px', fontSize: '16px' }}>
                    开始记录你的足迹
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: '1.5' }}>
                    在上方搜索框中输入地点名称，<br />
                    然后添加到你的足迹地图中
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* 右侧地图区域 */}
      <div style={{ 
        flex: 1, 
        position: 'relative'
      }}>
        {/* 浮动的收缩按钮（当侧边栏收起时显示在地图上） */}
        {isSidebarCollapsed && (
          <button
            onClick={() => setIsSidebarCollapsed(false)}
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              zIndex: 1000,
              padding: '12px',
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              cursor: 'pointer',
              color: '#64748b',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f8fafc';
              e.target.style.color = '#1a202c';
              e.target.style.transform = 'translateX(5px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#64748b';
              e.target.style.transform = 'translateX(0)';
            }}
            title="展开侧边栏"
          >
            <span style={{ fontSize: '16px' }}>▶</span>
            <span>足迹</span>
          </button>
        )}

        <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
        
        {/* Google Maps API 未加载提示 */}
        {!window.google && (
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#f1f5f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>🗺️</div>
              <h3 style={{ color: '#1a202c', marginBottom: '16px', fontSize: '20px' }}>
                Google Maps API 未加载
              </h3>
              <p style={{ color: '#64748b', marginBottom: '20px', lineHeight: '1.6' }}>
                请在 HTML 中添加 Google Maps API 脚本：
              </p>
              <div style={{ 
                backgroundColor: '#fff3cd',
                border: '1px solid #ffeaa7',
                borderRadius: '8px',
                padding: '16px',
                textAlign: 'left',
                fontSize: '13px',
                color: '#8b5a00',
                fontFamily: 'monospace'
              }}>
                {`<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>`}
              </div>
            </div>
          </div>
        )}

        {/* 详情面板 */}
        {selectedLocation && (
          <div style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            width: '320px',
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '16px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            zIndex: 1000,
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start', 
              marginBottom: '16px' 
            }}>
              <div>
                <h2 style={{ 
                  margin: '0 0 4px 0', 
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#1a202c'
                }}>
                  {selectedLocation.name}
                </h2>
                <div style={{ 
                  display: 'inline-block',
                  backgroundColor: getMarkerColor(selectedLocation.visits),
                  color: 'white',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {selectedLocation.visits} 次访问
                </div>
              </div>
              <button
                onClick={() => setSelectedLocation(null)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: '#64748b', 
                  cursor: 'pointer',
                  fontSize: '20px',
                  padding: '4px',
                  borderRadius: '6px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f1f5f9';
                  e.target.style.color = '#1a202c';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#64748b';
                }}
              >
                ✕
              </button>
            </div>
            
            <div style={{ marginBottom: '16px' }}>
              <p style={{ 
                color: '#64748b', 
                fontSize: '13px', 
                margin: '0 0 8px 0',
                lineHeight: '1.4'
              }}>
                📍 {selectedLocation.address}
              </p>
              <p style={{ 
                color: '#64748b', 
                fontSize: '14px', 
                margin: '0 0 8px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                📅 访问日期: {selectedLocation.visitDate || selectedLocation.date}
              </p>
              
              {/* 同行人员显示 */}
              {selectedLocation.companions && selectedLocation.companions.length > 0 && (
                <p style={{ 
                  color: '#64748b', 
                  fontSize: '14px', 
                  margin: '0 0 8px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  👥 同行: {selectedLocation.companions.join(', ')}
                </p>
              )}
              
              <p style={{ 
                color: '#64748b', 
                fontSize: '14px', 
                margin: '0 0 8px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                {getStarEmoji(selectedLocation.visits)}
              </p>
              {selectedLocation.description && (
                <p style={{ 
                  color: '#374151', 
                  fontSize: '14px', 
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  {selectedLocation.description}
                </p>
              )}
            </div>
            
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => incrementVisits(selectedLocation.id)}
                style={{
                  flex: 1,
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#2563eb';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#3b82f6';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                + 再次访问
              </button>
              <button
                onClick={() => deleteLocation(selectedLocation.id)}
                style={{
                  backgroundColor: '#ef4444',
                  color: 'white',
                  border: 'none',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#dc2626';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#ef4444';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                🗑️
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 添加位置弹窗 */}
      {showAddForm && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '32px',
            borderRadius: '16px',
            width: '480px',
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '24px' 
            }}>
              <h2 style={{ 
                color: '#1a202c', 
                margin: 0,
                fontSize: '20px',
                fontWeight: '700'
              }}>
                添加到我的足迹
              </h2>
              <button
                onClick={() => {
                  setShowAddForm(false);
                  resetNewLocation();
                }}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: '#64748b', 
                  cursor: 'pointer', 
                  fontSize: '20px',
                  padding: '4px',
                  borderRadius: '6px'
                }}
              >
                ✕
              </button>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                color: '#374151', 
                display: 'block', 
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                地点名称 *
              </label>
              <input
                type="text"
                value={newLocation.name}
                onChange={(e) => setNewLocation(prev => ({ ...prev, name: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#f8fafc',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  color: '#1a202c',
                  fontSize: '14px',
                  transition: 'border-color 0.2s ease'
                }}
                placeholder="地点名称"
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                }}
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                color: '#374151', 
                display: 'block', 
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                地址
              </label>
              <input
                type="text"
                value={newLocation.address}
                onChange={(e) => setNewLocation(prev => ({ ...prev, address: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#f8fafc',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  color: '#1a202c',
                  fontSize: '14px',
                  transition: 'border-color 0.2s ease'
                }}
                placeholder="详细地址"
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                }}
              />
            </div>

            {/* 访问日期 */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                color: '#374151', 
                display: 'block', 
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                访问日期 *
              </label>
              <input
                type="date"
                value={newLocation.visitDate}
                onChange={(e) => setNewLocation(prev => ({ ...prev, visitDate: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#f8fafc',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  color: '#1a202c',
                  fontSize: '14px',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                }}
              />
            </div>

            {/* 同行人员 */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                color: '#374151', 
                display: 'block', 
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                同行人员
              </label>
              
              {/* 已添加的同行人员 */}
              {newLocation.companions.length > 0 && (
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {newLocation.companions.map((companion, index) => (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          backgroundColor: '#eff6ff',
                          border: '1px solid #bfdbfe',
                          borderRadius: '20px',
                          padding: '4px 12px',
                          fontSize: '13px',
                          color: '#1e40af'
                        }}
                      >
                        <span>👤 {companion}</span>
                        <button
                          onClick={() => removeCompanion(index)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#ef4444',
                            cursor: 'pointer',
                            fontSize: '12px',
                            padding: '0 2px'
                          }}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* 添加同行人员 */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  value={newLocation.newCompanion}
                  onChange={(e) => setNewLocation(prev => ({ ...prev, newCompanion: e.target.value }))}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addCompanion();
                    }
                  }}
                  style={{
                    flex: 1,
                    padding: '10px 12px',
                    backgroundColor: '#f8fafc',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    color: '#1a202c',
                    fontSize: '14px',
                    transition: 'border-color 0.2s ease'
                  }}
                  placeholder="输入同行人员姓名"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                  }}
                />
                <button
                  onClick={addCompanion}
                  style={{
                    padding: '10px 16px',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#2563eb';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#3b82f6';
                  }}
                >
                  添加
                </button>
              </div>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                color: '#374151', 
                display: 'block', 
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                描述 (可选)
              </label>
              <textarea
                value={newLocation.description}
                onChange={(e) => setNewLocation(prev => ({ ...prev, description: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#f8fafc',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  color: '#1a202c',
                  fontSize: '14px',
                  minHeight: '80px',
                  resize: 'vertical',
                  transition: 'border-color 0.2s ease'
                }}
                placeholder="记录你对这个地方的感受或回忆..."
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                }}
              />
            </div>
            
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => {
                  setShowAddForm(false);
                  resetNewLocation();
                }}
                style={{
                  flex: 1,
                  padding: '12px 24px',
                  backgroundColor: '#f1f5f9',
                  color: '#64748b',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#e2e8f0';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f1f5f9';
                }}
              >
                取消
              </button>
              <button
                onClick={addLocation}
                style={{
                  flex: 1,
                  padding: '12px 24px',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#2563eb';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#3b82f6';
                }}
              >
                添加到足迹
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyFootprintMap;