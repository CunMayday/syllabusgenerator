// Test script to debug unit detection
const fs = require('fs');

const text = fs.readFileSync('GB730_2601C_Dev_Guide.docx.md', 'utf-8');
const lines = text.split('\n');

console.log('Total lines:', lines.length);
console.log('\n=== Searching for trigger phrases ===\n');

// Find all instances of the trigger phrase
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.match(/After\s+completing\s+this\s+unit.*you\s+should\s+be\s+able\s+to/i)) {
        console.log(`\n--- Found trigger phrase at line ${i + 1} ---`);
        console.log(`Line content: "${line.substring(0, 80)}..."`);

        let unitNumber = 'UNKNOWN';

        // Look backwards to find the unit number
        console.log(`Searching backward from line ${i + 1} to line ${Math.max(1, i - 49)}...`);
        for (let j = i - 1; j >= Math.max(0, i - 50); j--) {
            const headerLine = lines[j];
            const unitMatch = headerLine.match(/^\s*#{0,6}\s*\*{0,2}\s*Unit\s+(\d+)\s*(?:Overview|Reading|:)/i);
            if (unitMatch) {
                unitNumber = unitMatch[1];
                console.log(`✓ Found unit number ${unitNumber} at line ${j + 1}: "${headerLine.trim()}"`);
                break;
            }
        }

        if (unitNumber === 'UNKNOWN') {
            console.log(`✗ No unit header found within 50 lines!`);
            console.log(`Lines searched (${i - 1} down to ${Math.max(0, i - 50)}):`);
            for (let j = i - 1; j >= Math.max(0, i - 50); j--) {
                if (lines[j].toLowerCase().includes('unit')) {
                    console.log(`  Line ${j + 1}: "${lines[j].substring(0, 60)}..."`);
                }
            }
        }

        console.log(`Assigned unit: ${unitNumber}`);
    }
}
