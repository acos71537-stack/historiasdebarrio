/* ==========================================================================
   HISTORIAS DE BARRIO — BARRIO LOS LACHES (SANTA FE, BOGOTÁ)
   Interactividad con Google Maps Real, Imágenes Reales de Bogotá (Wikimedia Commons),
   Reproductor de Testimonios y Comparador Fotográfico Ayer/Hoy
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* --------------------------------------------------------------------------
     1. DATOS REALES Y GEORREFERENCIADOS EN GOOGLE MAPS — BARRIO LOS LACHES
     -------------------------------------------------------------------------- */
  const lachesPoints = {
    capilla: {
      id: 'capilla',
      category: 'lugares',
      categoryLabel: 'Monumento Nacional (1685–1722)',
      title: 'Santuario e Iglesia de Nuestra Señora de la Peña',
      coords: '4.5847° N, 74.0608° W · Carrera 7 Este # 2-68, Los Laches',
      mapQuery: 'Iglesia+de+Nuestra+Se%C3%B1ora+de+la+Pe%C3%B1a,+Los+Laches,+Bogota',
      zoom: 17,
      image: 'fotos/Fotos/tien.png',
      summary: 'Construido entre 1717 y 1722 tras el hallazgo de las imágenes en la roca en 1685 y declarado Monumento Nacional en 1975. Es el corazón espiritual e histórico del sector de La Peña y Los Laches en la Localidad de Santa Fe.',
      quote: '“Las campanas de Nuestra Señora de la Peña marcan el pulso del domingo en Los Laches; tras la misa, la plazuela se llena de música y amasijos.”'
    },
    chircal: {
      id: 'chircal',
      category: 'oficios',
      categoryLabel: 'Oficio Fundacional · Memoria del Barro',
      title: 'Antiguos Chircales y Laderas de Los Laches',
      coords: '4.5882° N, 74.0595° W · Ladera Oriental Los Laches, Santa Fe',
      mapQuery: '4.5882,-74.0595+(Antiguos+Chircales+de+Los+Laches+Bogota)',
      zoom: 17,
      image: 'fotos/Fotos/tien.png',
      summary: 'En las faldas de los Cerros Orientales sobre Egipto y La Peña, decenas de familias migrantes de Boyacá y Santander amasaron greda y cocieron a fuego lento los ladrillos con los que se levantó tanto el barrio Los Laches como buena parte del centro de Bogotá entre 1950 y 1975.',
      quote: '“El barro nos dio el sustento y también las paredes de nuestra propia casa. Cada ladrillo lleva la huella de nuestras manos.” — Don Josué Cárdenas, maestro chircalero.'
    },
    carpinteria: {
      id: 'carpinteria',
      category: 'oficios',
      categoryLabel: 'Oficio Tradicional · Economía Popular',
      title: 'Talleres de Carpintería y Comercio Tradicional en la Loma',
      coords: '4.5868° N, 74.0642° W · Carrera 9 Este con Calle 3, Los Laches',
      mapQuery: 'Calle+3+Carrera+9+Este,+Los+Laches,+Bogota',
      zoom: 17,
      image: 'fotos/Fotos/tien.png',
      summary: 'Desde hace más de 40 años, los talleres de madera, ornamentación, zapatería y tiendas de esquina sostienen la vida cotidiana de Los Laches. En el taller de don Manuel se han tallado puertas, comedores y juguetes para tres generaciones de familias lachunas.',
      quote: '“La madera bien trabajada dura más que uno; en casi todas las cuadras de Los Laches hay una ventana o una mesa hecha por manos del barrio.” — Don Manuel.'
    },
    mercedes: {
      id: 'mercedes',
      category: 'personajes',
      categoryLabel: 'Personaje del Barrio · Sabedora Culinaria',
      title: 'Doña Mercedes y el Fogón Tradicional Santafereño',
      coords: '4.5875° N, 74.0635° W · Plazoleta Parque Los Laches',
      mapQuery: 'Parque+Los+Laches,+Santa+Fe,+Bogota',
      zoom: 17,
      image: 'fotos/Fotos/se%C3%B1.png',
      summary: 'Portadora de la tradición culinaria cundiboyacense en la Localidad de Santa Fe. Sus envueltos de mazorca, ajiacos santafereños, fermentos tradicionales y ollas comunitarias han alimentado los convites y festivales barriales durante cuatro décadas.',
      quote: '“En esta loma nadie se queda sin un plato caliente; cuando prendemos el fogón, toda la cuadra se vuelve familia.” — Doña Mercedes.'
    },
    carnaval: {
      id: 'carnaval',
      category: 'tradiciones',
      categoryLabel: 'Tradición Viva · Comparsas y Arte',
      title: 'Festival Cultural y Carnaval de la Montaña en Los Laches',
      coords: '4.5878° N, 74.0628° W · Corredor Cultural Barrio Los Laches',
      mapQuery: 'Barrio+Los+Laches,+Santa+Fe,+Bogota',
      zoom: 16,
      image: 'fotos/Fotos/waw.png',
      summary: 'Cada año las calles empinadas y escaleras de Los Laches se transforman en un río de zanqueros, comparsas, hip-hop de la montaña, carranga y muralismo comunitario que celebra la dignidad y resistencia cultural de la Localidad de Santa Fe.',
      quote: '“Cambiamos el estigma por tambores y colores; cuando Los Laches baila, toda Bogotá mira hacia los cerros.” — Red Juvenil de Los Laches.'
    },
    autoconstruccion: {
      id: 'autoconstruccion',
      category: 'archivo',
      categoryLabel: 'Archivo Histórico · Memoria Urbana',
      title: 'Del Bogotá de Antaño a la Autoconstrucción en los Cerros',
      coords: '4.5879° N, 74.0631° W · Calle 4 Bis Este, Barrio Los Laches',
      mapQuery: '4.5879,-74.0631+(Escaleras+Fundacionales+Barrio+Los+Laches+Bogota)',
      zoom: 17,
      image: 'fotos/Fotos/ni%C3%B1o.png',
      summary: 'Memoria fotográfica de la transformación de Bogotá a mediados del siglo XX: cuando el crecimiento tras 1948 llevó a cientos de familias trabajadoras a poblar las antiguas canteras y chircales del oriente santafereño mediante convites comunitarios.',
      quote: '“Nadie nos regaló nada; cada peldaño de estas escaleras tiene nombre y apellido de los fundadores.” — Archivo Fotográfico Comunitario.'
    }
  };

  /* --------------------------------------------------------------------------
     2. CAMBIADOR DE PERSONAJES EN LA TARJETA RESUMEN (CON FOTOS Y AUDIOS REALES)
     -------------------------------------------------------------------------- */
  const pillarCharProfiles = [
    {
      name: 'Doña Mercedes — Cocinera tradicional y gestora cultural',
      bio: 'Guardián de las recetas de maíz, los convites comunitarios y la memoria culinaria de Los Laches.',
      img: 'fotos/Fotos/se%C3%B1.png',
      quote: '“Con una olla comunitaria, envueltos de maíz y chicha tradicional levantamos los convites de toda nuestra cuadra.”',
      author: '— Doña Mercedes, sabedora de Santa Fe',
      duration: '00:15',
      audioSrc: 'audios/dona_mercedes.wav',
      storyKey: 'mercedes'
    },
    {
      name: 'Don Josué — Maestro chircalero de los cerros',
      bio: 'Su familia moldeó y cocinó el barro de los cerros orientales para levantar las primeras casas del barrio.',
      img: 'fotos/Fotos/se%C3%B1o.png',
      quote: '“El barrio me enseñó a valorar lo que uno hace con las manos, desde amasar el barro hasta levantar cada pared en la loma.”',
      author: '— Don Josué, maestro chircalero',
      duration: '00:16',
      audioSrc: 'audios/don_josue.wav',
      storyKey: 'chircal'
    },
    {
      name: 'Valentina — Muralista y gestora juvenil',
      bio: 'Lidera recorridos culturales y murales comunitarios que narran la historia viva de Los Laches.',
      img: 'fotos/Fotos/vertical.png',
      quote: '“Pintar los muros de Los Laches es contarle a Bogotá que en los Cerros Orientales florece el arte y la vida.”',
      author: '— Valentina, muralista comunitaria',
      duration: '00:14',
      audioSrc: 'audios/valentina_jovenes.wav',
      storyKey: 'carnaval'
    }
  ];

  const mainCharImg = document.getElementById('pillar-char-main-img');
  const mainCharName = document.getElementById('featured-name');
  const mainCharBio = document.getElementById('featured-bio');
  const mainCharQuote = document.getElementById('pillar-char-quote');
  const mainCharAuthor = document.getElementById('pillar-char-author');
  const mainCharTime = document.getElementById('pillar-char-time');
  const featuredStoryLink = document.getElementById('featured-story-link');
  const pillarAudioPill = document.getElementById('pillar-audio-player');
  const thumbBtns = document.querySelectorAll('.char-thumb-btn');

  /* --------------------------------------------------------------------------
     3. REPRODUCTOR DE TESTIMONIOS SONOROS REALES (ARCHIVOS .WAV + FALLBACK TTS)
     -------------------------------------------------------------------------- */
  const audioPills = document.querySelectorAll('.audio-player-pill');
  const sharedAudio = new Audio();
  sharedAudio.preload = 'auto';
  let currentActivePill = null;

  function formatSeconds(sec) {
    if (!isFinite(sec) || sec < 0) return '00:00';
    const mins = String(Math.floor(sec / 60)).padStart(2, '0');
    const secs = String(Math.floor(sec % 60)).padStart(2, '0');
    return `${mins}:${secs}`;
  }

  function stopAllAudioPlayers() {
    sharedAudio.pause();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    audioPills.forEach(p => {
      p.classList.remove('playing');
      const pBtn = p.querySelector('.audio-play-btn');
      if (pBtn) {
        pBtn.textContent = '▶';
        pBtn.setAttribute('aria-pressed', 'false');
      }
    });
    currentActivePill = null;
  }

  function playTestimonyOnPill(pill) {
    const audioFile = pill.dataset.audio || 'audios/dona_mercedes.wav';
    const btn = pill.querySelector('.audio-play-btn');

    stopAllAudioPlayers();

    currentActivePill = pill;
    pill.classList.add('playing');
    if (btn) {
      btn.textContent = '❚❚';
      btn.setAttribute('aria-pressed', 'true');
    }

    sharedAudio.src = audioFile;
    sharedAudio.currentTime = 0;

    sharedAudio.play().catch(() => {
      // Fallback con Web Speech API en español si el navegador bloquea archivos locales
      if ('speechSynthesis' in window) {
        const card = pill.closest('article, section');
        const quoteText = card ? card.textContent : 'Testimonio del barrio Los Laches en la localidad de Santa Fe, Bogotá.';
        const utterance = new SpeechSynthesisUtterance(quoteText);
        utterance.lang = 'es-CO';
        utterance.onend = () => stopAllAudioPlayers();
        window.speechSynthesis.speak(utterance);
      }
    });
  }

  sharedAudio.addEventListener('timeupdate', () => {
    if (!currentActivePill) return;
    const timeEl = currentActivePill.querySelector('.audio-time');
    if (timeEl) {
      timeEl.textContent = formatSeconds(sharedAudio.currentTime);
    }
  });

  sharedAudio.addEventListener('ended', () => {
    if (currentActivePill) {
      const timeEl = currentActivePill.querySelector('.audio-time');
      if (timeEl && isFinite(sharedAudio.duration)) {
        timeEl.textContent = formatSeconds(sharedAudio.duration);
      }
    }
    stopAllAudioPlayers();
  });

  audioPills.forEach(pill => {
    const btn = pill.querySelector('.audio-play-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      if (currentActivePill === pill && !sharedAudio.paused) {
        stopAllAudioPlayers();
      } else {
        playTestimonyOnPill(pill);
      }
    });
  });

  thumbBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      thumbBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const data = pillarCharProfiles[idx];
      if (!data) return;

      if (mainCharImg) {
        mainCharImg.src = data.img;
        mainCharImg.alt = data.name;
      }
      if (mainCharName) mainCharName.textContent = data.name;
      if (mainCharBio) mainCharBio.textContent = data.bio;
      if (mainCharQuote) mainCharQuote.textContent = data.quote;
      if (mainCharAuthor) mainCharAuthor.textContent = data.author;
      if (mainCharTime) mainCharTime.textContent = data.duration;
      if (featuredStoryLink) featuredStoryLink.dataset.story = data.storyKey;

      if (pillarAudioPill) {
        const wasPlaying = currentActivePill === pillarAudioPill;
        pillarAudioPill.dataset.audio = data.audioSrc;
        if (wasPlaying) {
          playTestimonyOnPill(pillarAudioPill);
        }
      }
    });
  });

  /* --------------------------------------------------------------------------
     4. SLIDERS DE COMPARACIÓN ANTES / DESPUÉS (MINI Y GRANDE)
     -------------------------------------------------------------------------- */
  function setupComparisonSlider(sliderId, containerSelector) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;
    const container = slider.closest(containerSelector);
    if (!container) return;

    const updatePos = (val) => {
      container.style.setProperty('--compare-pos', `${val}%`);
    };

    updatePos(slider.value || 50);
    slider.addEventListener('input', (e) => updatePos(e.target.value));
  }

  setupComparisonSlider('mini-compare-range', '.mini-compare-wrapper');
  setupComparisonSlider('large-compare-range', '.large-compare-stage');

  /* --------------------------------------------------------------------------
     5. GOOGLE MAPS INTERACTIVO DEL BARRIO LOS LACHES
     -------------------------------------------------------------------------- */
  const googleMapIframe = document.getElementById('laches-google-map');
  const mapLoading = document.getElementById('map-loading');
  const poiEmptyMsg = document.getElementById('poi-empty');
  const mapFilterBtns = document.querySelectorAll('.map-filter-btn');
  const poiChips = document.querySelectorAll('.poi-chip-btn');
  const mapTypeBtns = document.querySelectorAll('.map-type-btn');
  const mapSearchInput = document.getElementById('map-internal-search');

  const detailImg = document.getElementById('map-detail-img');
  const detailCat = document.getElementById('map-detail-cat');
  const detailTitle = document.getElementById('map-detail-title');
  const detailCoords = document.getElementById('map-detail-coords');
  const detailDesc = document.getElementById('map-detail-desc');
  const detailQuote = document.getElementById('map-detail-quote');
  const detailModalBtn = document.getElementById('map-detail-modal-btn');
  const externalGmapsLink = document.getElementById('open-in-gmaps-link');

  let currentMapType = 'm';
  let currentPointKey = 'capilla';
  let currentMapFilter = 'todos';
  let mapLoadTimeout = null;

  if (googleMapIframe) {
    googleMapIframe.addEventListener('load', () => {
      if (mapLoading) mapLoading.hidden = true;
      if (mapLoadTimeout) clearTimeout(mapLoadTimeout);
    });
  }

  function updateGoogleMapEmbed(query, zoom = 17) {
    if (!googleMapIframe) return;
    if (mapLoading) {
      mapLoading.hidden = false;
      if (mapLoadTimeout) clearTimeout(mapLoadTimeout);
      mapLoadTimeout = setTimeout(() => {
        mapLoading.hidden = true;
      }, 3500);
    }
    const url = `https://maps.google.com/maps?q=${query}&t=${currentMapType}&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
    googleMapIframe.src = url;
    if (externalGmapsLink) {
      externalGmapsLink.href = `https://www.google.com/maps/search/?api=1&query=${query}`;
    }
  }

  function applyMapFilters() {
    const query = mapSearchInput ? mapSearchInput.value.toLowerCase().trim() : '';
    let visibleCount = 0;
    let firstMatchKey = null;

    poiChips.forEach(chip => {
      const catMatch = currentMapFilter === 'todos' || chip.dataset.cat === currentMapFilter;
      const pointData = lachesPoints[chip.dataset.point];
      const textSource = `${chip.textContent} ${pointData ? `${pointData.title} ${pointData.summary} ${pointData.categoryLabel}` : ''}`.toLowerCase();
      const searchMatch = !query || textSource.includes(query);
      const isVisible = catMatch && searchMatch;

      chip.classList.toggle('is-filtered-out', !isVisible);
      if (isVisible) {
        visibleCount++;
        if (!firstMatchKey) firstMatchKey = chip.dataset.point;
      }
    });

    if (poiEmptyMsg) {
      poiEmptyMsg.hidden = visibleCount > 0;
    }

    return firstMatchKey;
  }

  function selectMapPoint(pointKey) {
    const data = lachesPoints[pointKey];
    if (!data) return;
    currentPointKey = pointKey;

    poiChips.forEach(chip => {
      const isCurrent = chip.dataset.point === pointKey;
      chip.classList.toggle('active', isCurrent);
      chip.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
    });

    if (detailImg) {
      detailImg.src = data.image;
      detailImg.alt = data.title;
    }
    if (detailCat) {
      detailCat.textContent = data.categoryLabel;
      detailCat.className = `tag tag-${data.category}`;
    }
    if (detailTitle) detailTitle.textContent = data.title;
    if (detailCoords) detailCoords.textContent = data.coords;
    if (detailDesc) detailDesc.textContent = data.summary;
    if (detailQuote) detailQuote.textContent = data.quote;
    if (detailModalBtn) detailModalBtn.dataset.story = pointKey;

    updateGoogleMapEmbed(data.mapQuery, data.zoom);
  }

  poiChips.forEach(chip => {
    chip.addEventListener('click', () => {
      selectMapPoint(chip.dataset.point);
    });
  });

  mapTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      mapTypeBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      currentMapType = btn.dataset.maptype;
      const data = lachesPoints[currentPointKey];
      if (data) {
        updateGoogleMapEmbed(data.mapQuery, data.zoom);
      }
    });
  });

  mapFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      mapFilterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      currentMapFilter = btn.dataset.filter;

      const firstMatchKey = applyMapFilters();
      if (currentMapFilter === 'todos' && (!mapSearchInput || !mapSearchInput.value.trim())) {
        updateGoogleMapEmbed('Barrio+Los+Laches,+Santa+Fe,+Bogota', 16);
      } else if (firstMatchKey) {
        selectMapPoint(firstMatchKey);
      }
    });
  });

  if (mapSearchInput) {
    mapSearchInput.addEventListener('input', () => {
      applyMapFilters();
    });

    mapSearchInput.addEventListener('change', (e) => {
      const q = e.target.value.trim();
      if (q) {
        const encoded = encodeURIComponent(`${q}, Barrio Los Laches, Santa Fe, Bogotá`);
        updateGoogleMapEmbed(encoded, 17);
      } else if (currentMapFilter === 'todos') {
        updateGoogleMapEmbed('Barrio+Los+Laches,+Santa+Fe,+Bogota', 16);
      }
    });
  }

  // Leer parámetros ?punto= o ?buscar= al abrir mapa-cultural.html
  if (googleMapIframe) {
    const urlParams = new URLSearchParams(window.location.search);
    const initialPoint = urlParams.get('punto');
    const initialSearch = urlParams.get('buscar');

    if (initialPoint && lachesPoints[initialPoint]) {
      selectMapPoint(initialPoint);
    } else if (initialSearch) {
      if (mapSearchInput) {
        mapSearchInput.value = initialSearch;
        applyMapFilters();
      }
      const encoded = encodeURIComponent(`${initialSearch}, Barrio Los Laches, Santa Fe, Bogotá`);
      updateGoogleMapEmbed(encoded, 17);
    }
  }

  /* --------------------------------------------------------------------------
     6. BUSCADOR GLOBAL EN EL HERO
     -------------------------------------------------------------------------- */
  const heroSearchForm = document.getElementById('hero-search-form');
  const heroSearchInput = document.getElementById('hero-search-input');
  const heroSearchBtn = document.getElementById('hero-search-btn');
  const searchableCards = document.querySelectorAll('[data-searchable]');
  const searchStatusBanner = document.getElementById('search-results-status');

  function executeGlobalSearch() {
    if (!heroSearchInput) return;
    const rawQuery = heroSearchInput.value.trim();
    const query = rawQuery.toLowerCase();

    if (!query) {
      searchableCards.forEach(card => card.classList.remove('is-filtered-out'));
      if (searchStatusBanner) {
        searchStatusBanner.hidden = true;
        searchStatusBanner.innerHTML = '';
      }
      return;
    }

    let matchCount = 0;
    searchableCards.forEach(card => {
      const content = card.textContent.toLowerCase();
      const matches = content.includes(query);
      card.classList.toggle('is-filtered-out', !matches);
      if (matches) matchCount++;
    });

    if (searchStatusBanner) {
      searchStatusBanner.hidden = false;
      searchStatusBanner.innerHTML = '';

      const textSpan = document.createElement('span');
      textSpan.append('Mostrando ');
      const strong = document.createElement('strong');
      strong.textContent = String(matchCount);
      textSpan.append(strong, ' resultados de Los Laches para ');
      const em = document.createElement('em');
      em.textContent = `“${rawQuery}”`;
      textSpan.append(em);

      const clearBtn = document.createElement('button');
      clearBtn.type = 'button';
      clearBtn.id = 'clear-search-btn';
      clearBtn.className = 'btn-link';
      clearBtn.textContent = 'Ver todo';
      clearBtn.addEventListener('click', () => {
        heroSearchInput.value = '';
        executeGlobalSearch();
        heroSearchInput.focus();
      });

      searchStatusBanner.append(textSpan, ' · ', clearBtn);
    }
  }

  if (heroSearchForm) {
    heroSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = heroSearchInput ? heroSearchInput.value.trim() : '';
      if (searchableCards.length === 0 && query) {
        window.location.href = `mapa-cultural.html?buscar=${encodeURIComponent(query)}`;
        return;
      }
      executeGlobalSearch();
      (searchStatusBanner && !searchStatusBanner.hidden
        ? searchStatusBanner
        : document.getElementById('personajes'))?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (heroSearchInput) {
    heroSearchInput.addEventListener('input', executeGlobalSearch);
  }

  if (heroSearchBtn && !heroSearchForm) {
    heroSearchBtn.addEventListener('click', () => {
      executeGlobalSearch();
      (searchStatusBanner && !searchStatusBanner.hidden
        ? searchStatusBanner
        : document.getElementById('personajes'))?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* --------------------------------------------------------------------------
     7. MODALES ACCESIBLES (HISTORIA, APORTE COMUNITARIO Y LIGHTBOX)
     -------------------------------------------------------------------------- */
  const storyModal = document.getElementById('story-modal');
  const modalTitle = document.getElementById('modal-story-title');
  const modalCat = document.getElementById('modal-story-cat');
  const modalCoords = document.getElementById('modal-story-coords');
  const modalImg = document.getElementById('modal-story-img');
  const modalBody = document.getElementById('modal-story-body');
  const modalQuote = document.getElementById('modal-story-quote');
  const contributeModal = document.getElementById('contribute-modal');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxFigure = document.getElementById('lightbox-figure');
  const lightboxCaption = document.getElementById('lightbox-caption');

  let lastFocusedTrigger = null;

  function openModal(modal, triggerEl = null) {
    if (!modal) return;
    lastFocusedTrigger = triggerEl || document.activeElement;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  function closeAllModals() {
    [storyModal, contributeModal, lightboxModal].forEach(modal => {
      if (modal) modal.hidden = true;
    });
    document.body.classList.remove('modal-open');
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      lastFocusedTrigger.focus();
      lastFocusedTrigger = null;
    }
  }

  document.querySelectorAll('[data-story]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const key = trigger.dataset.story;
      const data = lachesPoints[key];
      if (!data || !storyModal) return;

      if (modalCat) {
        modalCat.textContent = data.categoryLabel;
        modalCat.className = `tag tag-${data.category}`;
      }
      if (modalTitle) modalTitle.textContent = data.title;
      if (modalCoords) modalCoords.textContent = data.coords;
      if (modalImg) {
        modalImg.src = data.image;
        modalImg.alt = data.title;
      }
      if (modalBody) {
        modalBody.innerHTML = '';
        const p = document.createElement('p');
        p.textContent = data.summary;
        modalBody.appendChild(p);
      }
      if (modalQuote) modalQuote.textContent = data.quote;

      openModal(storyModal, trigger);
    });
  });

  document.querySelectorAll('[data-goto-map]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pointKey = btn.dataset.gotoMap;
      if (googleMapIframe) {
        selectMapPoint(pointKey);
        document.getElementById('mapa-cultural')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = `mapa-cultural.html?punto=${encodeURIComponent(pointKey)}`;
      }
    });
  });

  document.querySelectorAll('.open-contribute-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      openModal(contributeModal, btn);
    });
  });

  document.querySelectorAll('[data-lightbox]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!lightboxModal || !lightboxFigure) return;
      const img = btn.querySelector('img');
      if (!img) return;

      const existingImg = lightboxFigure.querySelector('img');
      if (existingImg) existingImg.remove();

      const fullImg = document.createElement('img');
      fullImg.src = img.src;
      fullImg.alt = img.alt;
      lightboxFigure.insertBefore(fullImg, lightboxCaption);

      if (lightboxCaption) {
        lightboxCaption.textContent = btn.dataset.caption || img.alt;
      }

      openModal(lightboxModal, btn);
    });
  });

  document.querySelectorAll('.modal-close-btn, .modal-backdrop').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target === el) {
        closeAllModals();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
      if (mobileMenuBtn && navLinksContainer && navLinksContainer.classList.contains('open')) {
        navLinksContainer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

  /* --------------------------------------------------------------------------
     8. VALIDACIÓN ACCESIBLE DEL FORMULARIO COMUNITARIO
     -------------------------------------------------------------------------- */
  const contributeForm = document.getElementById('contribute-form');
  if (contributeForm) {
    const nameInput = document.getElementById('contribute-name');
    const nameError = document.getElementById('contribute-name-error');
    const storyInput = document.getElementById('contribute-story');
    const storyError = document.getElementById('contribute-story-error');
    const feedback = document.getElementById('contribute-feedback');

    contributeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      if (nameInput && nameError) {
        const validName = nameInput.value.trim().length > 0;
        nameError.hidden = validName;
        nameInput.setAttribute('aria-invalid', validName ? 'false' : 'true');
        if (!validName) isValid = false;
      }

      if (storyInput && storyError) {
        const validStory = storyInput.value.trim().length > 0;
        storyError.hidden = validStory;
        storyInput.setAttribute('aria-invalid', validStory ? 'false' : 'true');
        if (!validStory) isValid = false;
      }

      if (!isValid) {
        const firstInvalid = contributeForm.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      if (feedback) {
        feedback.hidden = false;
      }
      contributeForm.reset();
      if (nameInput) nameInput.setAttribute('aria-invalid', 'false');
      if (storyInput) storyInput.setAttribute('aria-invalid', 'false');
    });
  }

  /* --------------------------------------------------------------------------
     9. MENÚ MÓVIL, HEADER SCROLL Y NAVEGACIÓN ACTIVA
     -------------------------------------------------------------------------- */
  const siteHeader = document.getElementById('site-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
  const navLinksContainer = document.getElementById('main-nav-links');
  const navSectionLinks = document.querySelectorAll('#main-nav-links a[href^="#"]');

  if (siteHeader) {
    const toggleScrolled = () => {
      siteHeader.classList.toggle('scrolled', window.scrollY > 20);
    };
    toggleScrolled();
    window.addEventListener('scroll', toggleScrolled, { passive: true });
  }

  if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navLinksContainer.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinksContainer.querySelectorAll('a, button').forEach(item => {
      item.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (navSectionLinks.length > 0 && 'IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navSectionLinks.forEach(link => {
          const isMatch = link.getAttribute('href') === `#${id}`;
          link.classList.toggle('active', isMatch);
          if (isMatch) {
            link.setAttribute('aria-current', 'true');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    }, { rootMargin: '-30% 0px -55% 0px' });

    navSectionLinks.forEach(link => {
      const targetId = link.getAttribute('href')?.slice(1);
      const section = targetId ? document.getElementById(targetId) : null;
      if (section) sectionObserver.observe(section);
    });
  }
});
