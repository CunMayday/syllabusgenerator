# Unit Outcomes Extractor

A web application that extracts unit learning outcomes from course Markdown files and exports them to CSV format. This is a **client-side only** application that runs entirely in your browser - no server required!

**Current Version: 2.2.0** - Unit Validation

## Features

- 📤 Upload multiple Markdown files (drag & drop or browse)
- 🔍 Automatically extracts course codes (e.g., GB700, GB601)
- 📋 Identifies unit numbers (1-10)
- 🎯 Extracts learning outcomes from markdown bullet points (`-`, `•`, `*`)
- 📊 Displays results in an organized table
- 💾 Exports to CSV file with columns: Course Code, Unit, Outcome
- 🎨 Purdue University branded color scheme
- 🚀 **Works on GitHub Pages** - hosted for free!
- 🔒 **Privacy First** - all processing happens in your browser, files never leave your computer
- ⚡ **Fast & Reliable** - Direct markdown parsing, no PDF conversion needed

## Color Scheme

The application follows Purdue University branding guidelines:
- **Campus Gold (#C28E0E)**: Primary gold for highlights and accents
- **Athletic Gold (#CEB888)**: Softer gold for secondary elements
- **Purdue Black (#000000)**: Primary text and strong accents
- **Gray (#9D968D)**: Supporting text and borders
- **Dark Gray (#373A36)**: Secondary text
- **White**: Clean backgrounds and contrast

## Quick Start

### Option 1: Use GitHub Pages (Recommended)
Simply open the hosted version at:
```
https://[your-username].github.io/outcomes/
```

### Option 2: Run Locally
Just open `index.html` in your web browser. That's it! No installation needed.

## Usage

1. **Upload Markdown Files**: Click "Browse Files" or drag and drop your .md course files
2. **Process**: Click "Process Files" to extract outcomes
3. **Review**: View the extracted outcomes in the table
4. **Download**: Click "Download CSV" to save the results

## GitHub Pages Deployment

To deploy this application on GitHub Pages:

1. Push this repository to GitHub
2. Go to your repository's Settings
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose your main branch and root folder
6. Click "Save"
7. Your app will be available at `https://[your-username].github.io/outcomes/`

## How It Works

The application reads Markdown files directly in your browser:

1. **Course Code Detection**: Identifies codes like "GB700", "GB601" at the beginning
2. **Unit Headers**: Searches for "Unit X Overview and Outcomes" (where X = 1-10)
3. **Trigger Phrase**: Finds "After completing this unit, you should be able to:"
4. **Outcome Extraction**: Collects all markdown bullet points (`-`, `•`, `*`) following the trigger phrase
5. **CSV Export**: Formats data as: Course Code, Unit Number, Outcome Text

All processing happens client-side - your files never leave your computer.

## Example Output

```csv
Course Code,Unit,Outcome
"GB700","1","Articulate program requirements, expectations, and key milestones for the Doctor of Business Administration degree."
"GB700","1","Identify strategies for overcoming common dissertation hazards."
"GB700","2","Define what constitutes a doctoral dissertation and its role in demonstrating original scholarship."
```

## Technologies Used

- **Markdown Processing**: Native JavaScript text parsing
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **File Handling**: HTML5 FileReader API
- **CSV Export**: Blob API
- **Hosting**: GitHub Pages compatible (pure client-side)

## Project Structure

```
outcomes/
├── index.html                              # Single-page application (all code in one file)
├── *.md                                    # Sample Markdown files for testing
└── README.md                               # Documentation
```

## Browser Compatibility

This application requires a modern browser with support for:
- FileReader API
- Blob API
- ES6+ JavaScript features

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Notes

- All markdown processing happens in your browser - files never leave your computer
- No server or backend required - completely client-side
- Works offline once the page is loaded
- Supports multiple markdown files in a single upload
- Outcomes are extracted based on specific markdown formatting patterns
- Works best with markdown files following the standard course development guide format
- No installation or build process required

## Version History

### v2.2.0 - Unit Validation (2025-01-17)
**New Features**
- ✨ Added automatic validation to detect missing units (expects 10 units per course)
- ✨ Visual warning indicator (⚠️) displayed on course headers with incomplete units
- ✨ Detailed warning message shows which units are missing
- ✨ Reminds users to manually verify source files when units are incomplete
- ✨ Validation runs automatically after processing and displays in collapsible sections

### v2.1.3 - Regex Pattern Fix (2025-01-17)
**Bug Fixes**
- 🐛 Fixed regex pattern matching "Unit X" in narrative text instead of headers
- ✅ Updated pattern to require specific header formats: "Unit X Overview", "Unit X Reading", or "Unit X:"
- ✅ Prevents false matches in sentences like "explored in Unit 1" from being detected as unit headers
- ✅ All 10 units in GB730.md now correctly separated (Units 2, 6 were previously merged)

### v2.1.2 - Unit Detection Fix (2025-01-17)
**Bug Fixes**
- 🐛 Fixed unit number detection failing when unit headers are >20 lines before trigger phrase
- ✅ Increased backward search limit from 20 to 50 lines
- ✅ Resolves issue where Units 1+2 and 5+7 were merged in GB730.md
- ✅ All 10 units now correctly detected (headers were 23-28 lines away from trigger)

### v2.1.1 - Text Updates (2025-01-17)
**Content Corrections**
- 📝 Updated subtitle from "course PDF files" to "dev guides in .md (markdown) format"
- 📝 Changed loading message from "Processing PDF files..." to "Processing markdown files..."
- 📝 Updated code comments to reference markdown instead of PDF

### v2.1.0 - UI Enhancement (2025-01-17)
**User Interface Improvements**
- ✨ Moved export and restart buttons above results for better accessibility
- ✨ Results now grouped by course code with collapsible sections (collapsed by default)
- ✨ Redesigned color scheme with more black and gray for better contrast
- ✨ Header now uses black-to-gray gradient with gold text
- ✨ Course headers use black/gray backgrounds with gold highlights
- ✨ Click-to-expand course sections for cleaner results view
- ✨ Each course shows outcome count badge

### v2.0.1 - Multi-Unit Fix (2025-01-17)
**Bug Fixes**
- 🐛 Fixed parser to stop at first non-bullet line (was including text like "Unit 1 Reading and Resources")
- 🐛 Fixed parser to process ALL units in a file, not just Unit 1
- ✅ Changed strategy: now searches for ALL instances of trigger phrase "After completing this unit, you should be able to:"
- ✅ Parser now looks backward from trigger phrase to find unit number in preceding header
- ✅ More robust stop condition: exits bullet collection when hitting any non-bullet, non-empty line

### v2.0.0 - Markdown Support (2025-01-17)
**Breaking Change: Switched from PDF to Markdown**
- ✅ Removed PDF.js dependency
- ✅ Added native markdown file processing
- ✅ Improved bullet point detection (`-`, `•`, `*`)
- ✅ Better multi-line outcome handling
- ✅ More reliable parsing with direct text access
- ✅ Updated UI to reflect markdown support

### v1.0.0 - Initial Release
- Initial PDF-based implementation
- Basic outcome extraction
- CSV export functionality
- Purdue branding
- GitHub Pages compatible

## License

MIT
