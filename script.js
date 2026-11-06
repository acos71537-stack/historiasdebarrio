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
    piedraAmor: {
      id: 'piedraAmor',
      category: 'lugares',
      categoryLabel: 'Lugar Emblemático · Mirador Natural',
      title: 'Mirador La Piedra del Amor (Rocas de Los Laches)',
      coords: '4.5894° N, 74.0612° W · Parte Alta Barrio Los Laches, Santa Fe',
      mapQuery: '4.5894,-74.0612+(Mirador+Piedra+del+Amor+Barrio+Los+Laches+Bogota)',
      zoom: 17,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cerros_orientales,_Bogot%C3%A1.jpg?width=1000',
      summary: 'A más de 2.750 metros sobre el nivel del mar en los Cerros Orientales, estas formaciones rocosas ancestrales ofrecen una de las panorámicas reales más sobrecogedoras de Bogotá. Ha sido punto de encuentro de caminantes ecológicos, jóvenes del barrio y rituales de memoria muisca y lache.',
      quote: '“Subir a la Piedra del Amor al atardecer es entender que Los Laches es el balcón donde Bogotá conversa con la montaña.” — Colectivo Caminantes de la Loma.'
    },
    capilla: {
      id: 'capilla',
      category: 'lugares',
      categoryLabel: 'Monumento Nacional (1685–1722)',
      title: 'Santuario e Iglesia de Nuestra Señora de la Peña',
      coords: '4.5847° N, 74.0608° W · Carrera 7 Este # 2-68, Los Laches',
      mapQuery: 'Iglesia+de+Nuestra+Se%C3%B1ora+de+la+Pe%C3%B1a,+Los+Laches,+Bogota',
      zoom: 17,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Iglesia_de_La_Pe%C3%B1a_1.jpg?width=1000',
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
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Barrio_Egipto_de_Bogot%C3%A1.jpg?width=1000',
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
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bogot%C3%A1_Barrio_La_Perseverancia.JPG?width=1000',
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
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Do%C3%B1a_Tere,_Chichera_en_la_Perseverancia.jpg?width=900',
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
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Carbog2007.jpg?width=1000',
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
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Plaza_de_Los_M%C3%A1rtires_1948_-_Bogot%C3%A1.jpg?width=1000',
      summary: 'Memoria fotográfica de la transformación de Bogotá a mediados del siglo XX: cuando el crecimiento tras 1948 llevó a cientos de familias trabajadoras a poblar las antiguas canteras y chircales del oriente santafereño mediante convites comunitarios.',
      quote: '“Nadie nos regaló nada; cada peldaño de estas escaleras tiene nombre y apellido de los fundadores.” — Archivo Fotográfico Comunitario.'
    }
  };

  /* --------------------------------------------------------------------------
     2. CAMBIADOR DE PERSONAJES EN LA TARJETA RESUMEN (CON FOTOS Y AUDIOS REALES)
     -------------------------------------------------------------------------- */
  const pillarCharProfiles = [
    {
      img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Do%C3%B1a_Tere,_Chichera_en_la_Perseverancia.jpg?width=800',
      quote: '“Con una olla comunitaria, envueltos de maíz y chicha tradicional levantamos los convites de toda nuestra cuadra.”',
      author: '— Doña Mercedes, sabedora de Santa Fe',
      duration: '00:15',
      audioSrc: 'audios/dona_mercedes.wav'
    },
    {
      img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bogot%C3%A1_Plaza_de_mercado_de_Las_Cruces.JPG?width=800',
      quote: '“El barrio me enseñó a valorar lo que uno hace con las manos, desde amasar el barro hasta levantar cada pared en la loma.”',
      author: '— Don Josué, maestro chircalero',
      duration: '00:16',
      audioSrc: 'audios/don_josue.wav'
    },
    {
      img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mural_en_San_Victorino.jpg?width=800',
      quote: '“Pintar los muros de Los Laches es contarle a Bogotá que en los Cerros Orientales florece el arte y la vida.”',
      author: '— Valentina, muralista comunitaria',
      duration: '00:14',
      audioSrc: 'audios/valentina_jovenes.wav'
    }
  ];

  const mainCharImg = document.getElementById('pillar-char-main-img');
  const mainCharQuote = document.getElementById('pillar-char-quote');
  const mainCharAuthor = document.getElementById('pillar-char-author');
  const mainCharTime = document.getElementById('pillar-char-time');
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
      if (pBtn) pBtn.innerHTML = '▶';
    });
    currentActivePill = null;
  }

  function playTestimonyOnPill(pill) {
    const audioFile = pill.dataset.audio || 'audios/dona_mercedes.wav';
    const btn = pill.querySelector('.audio-play-btn');

    stopAllAudioPlayers();

    currentActivePill = pill;
    pill.classList.add('playing');
    if (btn) btn.innerHTML = '❚❚';

    sharedAudio.src = audioFile;
    sharedAudio.currentTime = 0;

    sharedAudio.play().catch(() => {
      // Fallback con Web Speech API en español si el navegador bloquea archivos locales
      if ('speechSynthesis' in window) {
        const card = pill.closest('article');
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
      thumbBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const data = pillarCharProfiles[idx];
      if (data && mainCharImg) {
        mainCharImg.src = data.img;
        mainCharQuote.textContent = data.quote;
        mainCharAuthor.textContent = data.author;
        mainCharTime.textContent = data.duration;
        if (pillarAudioPill) {
          const wasPlaying = currentActivePill === pillarAudioPill;
          pillarAudioPill.dataset.audio = data.audioSrc;
          if (wasPlaying) {
            playTestimonyOnPill(pillarAudioPill);
          }
        }
      }
    });
  });

  /* --------------------------------------------------------------------------
     4. SLIDERS DE COMPARACIÓN ANTES / DESPUÉS (MINI Y GRANDE)
     -------------------------------------------------------------------------- */
  function setupComparisonSlider(sliderId, beforeLayerId, dividerId) {
    const slider = document.getElementById(sliderId);
    const beforeLayer = document.getElementById(beforeLayerId);
    const divider = document.getElementById(dividerId);

    if (!slider || !beforeLayer || !divider) return;

    slider.addEventListener('input', (e) => {
      const val = e.target.value;
      beforeLayer.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
      divider.style.left = `${val}%`;
    });
  }

  setupComparisonSlider('mini-compare-range', 'mini-before-img', 'mini-compare-line');
  setupComparisonSlider('large-compare-range', 'large-before-img', 'large-compare-line');

  /* --------------------------------------------------------------------------
     5. GOOGLE MAPS INTERACTIVO DEL BARRIO LOS LACHES
     -------------------------------------------------------------------------- */
  const googleMapIframe = document.getElementById('laches-google-map');
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

  let currentMapType = 'm'; // 'm' = Mapa estándar, 'k' = Satélite
  let currentPointKey = 'piedraAmor';

  function updateGoogleMapEmbed(query, zoom = 17) {
    if (!googleMapIframe) return;
    const url = `https://maps.google.com/maps?q=${query}&t=${currentMapType}&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
    googleMapIframe.src = url;
    if (externalGmapsLink) {
      externalGmapsLink.href = `https://www.google.com/maps/search/?api=1&query=${query}`;
    }
  }

  function selectMapPoint(pointKey) {
    const data = lachesPoints[pointKey];
    if (!data) return;
    currentPointKey = pointKey;

    poiChips.forEach(chip => {
      chip.classList.toggle('active', chip.dataset.point === pointKey);
    });

    if (detailImg) detailImg.src = data.image;
    if (detailCat) detailCat.textContent = data.categoryLabel;
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

  // Cambiar entre Mapa de Calles y Vista Satelital en Google Maps
  mapTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      mapTypeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMapType = btn.dataset.maptype;
      const data = lachesPoints[currentPointKey];
      if (data) {
        updateGoogleMapEmbed(data.mapQuery, data.zoom);
      }
    });
  });

  // Filtrar chips de lugares por categoría y centrar Google Maps
  mapFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      mapFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterCat = btn.dataset.filter;

      let firstMatchKey = null;
      poiChips.forEach(chip => {
        const matches = filterCat === 'todos' || chip.dataset.cat === filterCat;
        chip.style.display = matches ? 'inline-flex' : 'none';
        if (matches && !firstMatchKey) {
          firstMatchKey = chip.dataset.point;
        }
      });

      if (filterCat === 'todos') {
        updateGoogleMapEmbed('Barrio+Los+Laches,+Santa+Fe,+Bogota', 16);
      } else if (firstMatchKey) {
        selectMapPoint(firstMatchKey);
      }
    });
  });

  // Búsqueda directa en Google Maps dentro de Los Laches
  if (mapSearchInput) {
    mapSearchInput.addEventListener('change', (e) => {
      const q = e.target.value.trim();
      if (q) {
        const encoded = encodeURIComponent(`${q}, Barrio Los Laches, Santa Fe, Bogotá`);
        updateGoogleMapEmbed(encoded, 17);
      } else {
        updateGoogleMapEmbed('Barrio+Los+Laches,+Santa+Fe,+Bogota', 16);
      }
    });

    mapSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      poiChips.forEach(chip => {
        const data = lachesPoints[chip.dataset.point];
        const text = `${data.title} ${data.summary} ${data.categoryLabel}`.toLowerCase();
        chip.style.display = text.includes(q) ? 'inline-flex' : 'none';
      });
    });
  }

  /* --------------------------------------------------------------------------
     6. BUSCADOR GLOBAL EN EL HERO ("Buscar en el barrio Los Laches...")
     -------------------------------------------------------------------------- */
  const heroSearchInput = document.getElementById('hero-search-input');
  const heroSearchBtn = document.getElementById('hero-search-btn');
  const searchableCards = document.querySelectorAll('[data-searchable]');
  const searchStatusBanner = document.getElementById('search-results-status');

  function executeGlobalSearch() {
    if (!heroSearchInput) return;
    const query = heroSearchInput.value.toLowerCase().trim();

    if (!query) {
      searchableCards.forEach(card => (card.style.display = ''));
      if (searchStatusBanner) searchStatusBanner.style.display = 'none';
      return;
    }

    let matchCount = 0;
    searchableCards.forEach(card => {
      const content = card.textContent.toLowerCase();
      if (content.includes(query)) {
        card.style.display = '';
        matchCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (searchStatusBanner) {
      searchStatusBanner.style.display = 'flex';
      searchStatusBanner.innerHTML = `
        <span>Mostrando <strong>${matchCount}</strong> historias de Los Laches para <em>“${heroSearchInput.value}”</em></span>
        <button id="clear-search-btn" class="clear-search-btn">Ver todas las historias</button>
      `;
      const clearBtn = document.getElementById('clear-search-btn');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          heroSearchInput.value = '';
          executeGlobalSearch();
        });
      }
    }
  }

  if (heroSearchInput) {
    heroSearchInput.addEventListener('input', executeGlobalSearch);
  }
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', () => {
      executeGlobalSearch();
      document.getElementById('explorar-dimensiones')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* --------------------------------------------------------------------------
     7. MODAL DE LECTURA DE HISTORIA Y MODAL DE APORTE COMUNITARIO
     -------------------------------------------------------------------------- */
  const storyModal = document.getElementById('story-modal');
  const modalTitle = document.getElementById('modal-story-title');
  const modalCat = document.getElementById('modal-story-cat');
  const modalCoords = document.getElementById('modal-story-coords');
  const modalImg = document.getElementById('modal-story-img');
  const modalBody = document.getElementById('modal-story-body');
  const modalQuote = document.getElementById('modal-story-quote');

  document.querySelectorAll('[data-story]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const key = trigger.dataset.story;
      const data = lachesPoints[key];
      if (!data || !storyModal) return;

      modalCat.textContent = data.categoryLabel;
      modalTitle.textContent = data.title;
      modalCoords.textContent = data.coords;
      modalImg.src = data.image;
      modalBody.textContent = data.summary;
      modalQuote.textContent = data.quote;
      storyModal.classList.add('open');
    });
  });

  // Botones para ir a un punto específico en Google Maps
  document.querySelectorAll('[data-goto-map]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pointKey = btn.dataset.gotoMap;
      selectMapPoint(pointKey);
      document.getElementById('mapa-cultural')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const contributeModal = document.getElementById('contribute-modal');
  document.querySelectorAll('.open-contribute-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      contributeModal?.classList.add('open');
    });
  });

  document.querySelectorAll('.modal-close-btn, .modal-backdrop').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target === el) {
        storyModal?.classList.remove('open');
        contributeModal?.classList.remove('open');
      }
    });
  });

  const contributeForm = document.getElementById('contribute-form');
  if (contributeForm) {
    contributeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = document.getElementById('contribute-feedback');
      if (feedback) {
        feedback.style.display = 'block';
        contributeForm.reset();
      }
    });
  }

  /* --------------------------------------------------------------------------
     8. MENÚ MÓVIL
     -------------------------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
  const navLinksContainer = document.getElementById('main-nav-links');

  if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinksContainer.classList.toggle('mobile-open');
    });
  }
});
