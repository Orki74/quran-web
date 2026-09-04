// Quran Web Application - Main JavaScript
let currentSurahIndex = 0;
let allSurahs = quranData;

// DOM Elements
const contentDisplay = document.getElementById('contentDisplay');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const surahSelect = document.getElementById('surahSelect');
const currentSurahSpan = document.getElementById('currentSurah');
const currentPageSpan = document.getElementById('currentPage');
const pageCounterSpan = document.getElementById('pageCounter');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const prevPageBtn = document.getElementById('prevPageBtn');
const nextPageBtn = document.getElementById('nextPageBtn');
const firstBtn = document.getElementById('firstBtn');
const lastBtn = document.getElementById('lastBtn');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initializeSurahSelector();
    displaySurah(0);
    attachEventListeners();
});

// Initialize Surah Dropdown
function initializeSurahSelector() {
    allSurahNames.forEach(surah => {
        const option = document.createElement('option');
        option.value = surah.number - 1;
        option.textContent = `${surah.number}. ${surah.name}`;
        surahSelect.appendChild(option);
    });

    surahSelect.addEventListener('change', (e) => {
        const index = parseInt(e.target.value);
        if (!isNaN(index)) {
            displaySurah(index);
        }
    });
}

// Display Surah
function displaySurah(index) {
    if (index < 0 || index >= allSurahs.length) return;

    currentSurahIndex = index;
    const surah = allSurahs[index];

    // Update dropdown
    surahSelect.value = index;

    // Update page info
    currentSurahSpan.textContent = `Sure ${surah.number}: ${surah.name}`;
    currentPageSpan.textContent = `${surah.number}. Sayfa`;
    pageCounterSpan.textContent = `Sayfa ${surah.number} / ${allSurahs.length}`;

    // Clear previous content
    contentDisplay.innerHTML = '';

    // Add surah title
    const titleDiv = document.createElement('div');
    titleDiv.className = 'surah-title';
    titleDiv.innerHTML = `<div style="font-size: 1.5em; margin-bottom: 10px;">${surah.nameArabic}</div>
                          <div>${surah.number}. Sure: ${surah.name}</div>
                          <div style="font-size: 0.9em; margin-top: 10px; color: #666;">
                            ${surah.verseCount} Ayet • ${surah.revelationType}
                          </div>`;
    contentDisplay.appendChild(titleDiv);

    // Add verses
    surah.verses.forEach(verse => {
        const ayahDiv = document.createElement('div');
        ayahDiv.className = 'ayah';

        const arabicDiv = document.createElement('div');
        arabicDiv.className = 'ayah-arabic';
        arabicDiv.textContent = verse.arabic;

        const transliterationDiv = document.createElement('div');
        transliterationDiv.className = 'ayah-transliteration';
        transliterationDiv.textContent = verse.transliteration;

        const numberSpan = document.createElement('span');
        numberSpan.className = 'ayah-number';
        numberSpan.textContent = verse.number;

        ayahDiv.appendChild(numberSpan);
        ayahDiv.appendChild(arabicDiv);
        ayahDiv.appendChild(transliterationDiv);

        contentDisplay.appendChild(ayahDiv);
    });

    // Scroll to top
    contentDisplay.scrollIntoView({ behavior: 'smooth' });
}

// Search Functionality
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    if (query.length === 0) {
        searchResults.classList.add('hidden');
        return;
    }

    const results = [];

    // Search in surah names
    allSurahNames.forEach(surah => {
        if (surah.name.toLowerCase().includes(query)) {
            results.push({
                type: 'surah',
                text: `Sure ${surah.number}: ${surah.name}`,
                index: surah.number - 1
            });
        }
    });

    // Search in verses
    allSurahs.forEach((surah, surahIndex) => {
        surah.verses.forEach(verse => {
            if (verse.transliteration.toLowerCase().includes(query)) {
                results.push({
                    type: 'verse',
                    text: `Sure ${surah.number}, Ayet ${verse.number}: ${verse.transliteration.substring(0, 50)}...`,
                    surahIndex: surahIndex,
                    verseNumber: verse.number
                });
            }
        });
    });

    // Display results
    if (results.length > 0) {
        searchResults.innerHTML = '';
        results.slice(0, 10).forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `<strong>${result.text}</strong>`;
            resultItem.addEventListener('click', () => {
                displaySurah(result.surahIndex);
                if (result.type === 'verse') {
                    // Scroll to specific verse
                    setTimeout(() => {
                        const verses = contentDisplay.querySelectorAll('.ayah');
                        if (verses[result.verseNumber - 1]) {
                            verses[result.verseNumber - 1].scrollIntoView({ behavior: 'smooth' });
                            verses[result.verseNumber - 1].style.background = '#fffacd';
                            setTimeout(() => {
                                verses[result.verseNumber - 1].style.background = '#fafafa';
                            }, 2000);
                        }
                    }, 100);
                }
                searchInput.value = '';
                searchResults.classList.add('hidden');
            });
            searchResults.appendChild(resultItem);
        });
        searchResults.classList.remove('hidden');
    } else {
        searchResults.innerHTML = '<div class="search-result-item" style="color: #999;">Sonuç bulunamadı</div>';
        searchResults.classList.remove('hidden');
    }
});

// Close search results when clicking outside
document.addEventListener('click', (e) => {
    if (e.target !== searchInput && !searchResults.contains(e.target)) {
        searchResults.classList.add('hidden');
    }
});

// Attach Event Listeners
function attachEventListeners() {
    prevBtn.addEventListener('click', () => {
        if (currentSurahIndex > 0) {
            displaySurah(currentSurahIndex - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSurahIndex < allSurahs.length - 1) {
            displaySurah(currentSurahIndex + 1);
        }
    });

    prevPageBtn.addEventListener('click', () => {
        if (currentSurahIndex > 0) {
            displaySurah(currentSurahIndex - 1);
        }
    });

    nextPageBtn.addEventListener('click', () => {
        if (currentSurahIndex < allSurahs.length - 1) {
            displaySurah(currentSurahIndex + 1);
        }
    });

    firstBtn.addEventListener('click', () => {
        displaySurah(0);
    });

    lastBtn.addEventListener('click', () => {
        displaySurah(allSurahs.length - 1);
    });
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (searchInput === document.activeElement) return;

    if (e.key === 'ArrowLeft') {
        if (currentSurahIndex > 0) {
            displaySurah(currentSurahIndex - 1);
        }
    } else if (e.key === 'ArrowRight') {
        if (currentSurahIndex < allSurahs.length - 1) {
            displaySurah(currentSurahIndex + 1);
        }
    }
});

// Print functionality (for printing pages)
window.printPage = function() {
    window.print();
};

// Responsive adjustments
function adjustForMobileView() {
    if (window.innerWidth < 768) {
        contentDisplay.style.fontSize = '14px';
    } else {
        contentDisplay.style.fontSize = '16px';
    }
}

window.addEventListener('resize', adjustForMobileView);
adjustForMobileView();
