// Elements data
const elements = [
    {symbol: 'H', name: 'Hydrogen', number: 1, category: 'nonmetal', xpos: 1, ypos: 1},
    {symbol: 'He', name: 'Helium', number: 2, category: 'noble', xpos: 18, ypos: 1},
    {symbol: 'Li', name: 'Lithium', number: 3, category: 'metal', xpos: 1, ypos: 2},
    // Add more elements as needed
];

// Dobereiner's triads data
const triads = [
    { 
        name: "Alkali Metals", 
        elements: [
            {symbol: 'Li', name: 'Lithium', atomicMass: 7},
            {symbol: 'Na', name: 'Sodium', atomicMass: 23},
            {symbol: 'K', name: 'Potassium', atomicMass: 39}
        ]
    },
    { 
        name: "Alkaline Earth Metals", 
        elements: [
            {symbol: 'Ca', name: 'Calcium', atomicMass: 40.1},
            {symbol: 'Sr', name: 'Strontium', atomicMass: 87.6},
            {symbol: 'Ba', name: 'Barium', atomicMass: 137.3}
        ]
    },
    { 
        name: "Halogens", 
        elements: [
            {symbol: 'Cl', name: 'Chlorine', atomicMass: 35.4},
            {symbol: 'Br', name: 'Bromine', atomicMass: 79.9},
            {symbol: 'I', name: 'Iodine', atomicMass: 126.9}
        ]
    },
    { 
        name: "Chalcogens", 
        elements: [
            {symbol: 'S', name: 'Sulfur', atomicMass: 32.1},
            {symbol: 'Se', name: 'Selenium', atomicMass: 78.9},
            {symbol: 'Te', name: 'Tellurium', atomicMass: 127.6}
        ]
    },
    { 
        name: "Transition Metals", 
        elements: [
            {symbol: 'Fe', name: 'Iron', atomicMass: 55.8},
            {symbol: 'Co', name: 'Cobalt', atomicMass: 58.9},
            {symbol: 'Ni', name: 'Nickel', atomicMass: 58.7}
        ]
    }
];

// Newlands' octaves data
const octaves = [
    ['H', 'Li', 'G', 'Bo', 'C', 'N', 'O'],
    ['F', 'Na', 'Mg', 'Al', 'Si', 'P', 'S'],
    ['Cl', 'K', 'Ca', 'Cr', 'Ti', 'Mn', 'Fe'],
    ['Co, Ni', 'Cu', 'Zn', 'Y', 'In', 'As', 'Se'],
    ['Br', 'Rb', 'Sr', 'Ce, La', 'Zr', 'Di, Mo', 'Ro, Ru'],
    ['Pd', 'Ag', 'Cd', 'U', 'Sn', 'Sb', 'Te'],
    ['I', 'Cs', 'Ba,V', 'Ta', 'W', 'Nb', 'Au'],
    ['Pt, Ir', 'Tl', 'Pb', 'Th', 'Hg', 'Bi', 'Os']
];

// DOM loaded event
document.addEventListener('DOMContentLoaded', function() {
    // Make the first section visible
    document.getElementById('hero').classList.add('visible');
    
    // Add scroll event listener for animations
    window.addEventListener('scroll', handleScroll);
    
    // Initialize with more elements if needed
    initializeMoreElements();
});

// Handle scroll events for animations
function handleScroll() {
    // Make sections visible when they enter viewport
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
            
            // If it's the history section, animate timeline items
            if (section.id === 'history') {
                animateTimelineItems();
            }
            
            // If it's the uses section, animate use cards
            if (section.id === 'uses') {
                animateUseCards();
            }
        }
    });
}

// Animate timeline items with a delay
function animateTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 200);
    });
}

// Animate use cards with a delay
function animateUseCards() {
    const useCards = document.querySelectorAll('.use-card');
    useCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 150);
    });
}

// Check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight - 150 &&
        rect.bottom >= 0
    );
}

// Navigate to a specific table view
function navigateTo(tableType) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('visible');
    });
    
    // Show the selected table section
    const tableSection = document.getElementById(`${tableType}-table`);
    tableSection.classList.remove('hidden');
    tableSection.classList.add('visible');
    
    // Render the appropriate table
    switch (tableType) {
        case 'modern':
            renderModernTable();
            break;
        case 'triads':
            renderTriads();
            break;
        case 'octaves':
            renderOctaves();
            break;
        case 'mendeleev':
            renderMendeleev();
            break;
    }
}

// Return to the main page
function showMainPage() {
    // Hide all table sections
    document.querySelectorAll('.table-section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show the main sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('hidden');
    });
    
    // Re-trigger scroll effects
    handleScroll();
}

// Initialize with more elements if needed
function initializeMoreElements() {
    // This is where you would add code to populate the elements array
    // with more elements from an external source or hard-coded data
}

// Render the modern periodic table
function renderModernTable() {
    const tableContainer = document.getElementById('table');
    tableContainer.innerHTML = '';
    
    // Create a placeholder grid for the full table
    const grid = document.createElement('div');
    grid.className = 'periodic-table';
    tableContainer.appendChild(grid);
    
    // Add elements to the table
    elements.forEach(el => {
        const elementDiv = document.createElement('div');
        elementDiv.className = `element ${el.category}`;
        elementDiv.style.gridColumn = el.xpos;
        elementDiv.style.gridRow = el.ypos;
        
        elementDiv.innerHTML = `
            <div class="number">${el.number}</div>
            <div class="symbol">${el.symbol}</div>
        `;
        
        // Add hover effect with more information
        elementDiv.addEventListener('mouseover', () => {
            elementDiv.setAttribute('title', `${el.name} (${el.category})`);
        });
        
        grid.appendChild(elementDiv);
    });
}

// Render Dobereiner's Triads
function renderTriads() {
    const container = document.getElementById('triads-container');
    container.innerHTML = '';
    container.className = 'triad-container';
    
    triads.forEach(triad => {
        const triadDiv = document.createElement('div');
        triadDiv.className = 'triad-group';
        
        triadDiv.innerHTML = `
            <div class="triad-title">${triad.name}</div>
            <div class="triad-elements">
                ${triad.elements.map(el => `
                    <div class="element">
                        <div class="symbol">${el.symbol}</div>
                        <div class="mass">${el.atomicMass}</div>
                    </div>
                `).join('')}
            </div>
            <div class="triad-property">
                <p>Mean of first and last: ${((triad.elements[0].atomicMass + triad.elements[2].atomicMass) / 2).toFixed(1)}</p>
                <p>Middle element: ${triad.elements[1].atomicMass}</p>
            </div>
        `;
        
        container.appendChild(triadDiv);
    });
}

// Render Newlands' Octaves
function renderOctaves() {
    const container = document.getElementById('octaves-container');
    container.innerHTML = '';
    container.className = 'octave-container';
    
    octaves.forEach((row, rowIndex) => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'octave-row';
        
        row.forEach((element, colIndex) => {
            const elementDiv = document.createElement('div');
            elementDiv.className = 'element';
            elementDiv.innerHTML = `<div class="symbol">${element}</div>`;
            
            // Add note highlighting to show the octave pattern
            if (colIndex === rowIndex % 7) {
                elementDiv.style.boxShadow = '0 0 10px gold';
            }
            
            rowDiv.appendChild(elementDiv);
        });
        
        container.appendChild(rowDiv);
    });
}

// Render Mendeleev's Table
function renderMendeleev() {
    const container = document.getElementById('mendeleev-container');
    container.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <p>Mendeleev's periodic table arranged elements by atomic weight and chemical properties.</p>
            <p>He left gaps for undiscovered elements and predicted their properties.</p>
        </div>
        <div class="mendeleev-table">
            <!-- Here you would create a table based on Mendeleev's arrangement -->
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Mendeleev%27s_1869_periodic_table.svg/800px-Mendeleev%27s_1869_periodic_table.svg.png" 
                 alt="Mendeleev's Periodic Table" 
                 style="max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
        </div>
    `;
}

// Filter elements by category
function filterCategory(category) {
    const elements = document.querySelectorAll('.element');
    
    elements.forEach(el => {
        if (category === 'all' || el.classList.contains(category)) {
            el.style.opacity = '1';
        } else {
            el.style.opacity = '0.3';
        }
    });
}
