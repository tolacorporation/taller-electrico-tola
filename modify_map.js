const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add import
if (!content.includes('MapNavigationButton')) {
  content = content.replace("import BookingButton from '@/components/ui/BookingButton';", "import BookingButton from '@/components/ui/BookingButton';\nimport MapNavigationButton from '@/components/ui/MapNavigationButton';");
}

// Remove pointer-events-none from iframe
content = content.replace('pointer-events-none md:pointer-events-auto', '');

// Remove overlay
const overlayRegex = /<div className="absolute inset-0 flex items-center justify-center md:hidden bg-black\/5 pointer-events-none">[\s\S]*?<\/div>/;
content = content.replace(overlayRegex, '');

// Replace old a tag with <MapNavigationButton />
const aTagRegex = /<a[\s\S]*?Abrir en Google Maps \(Navegar\)[\s\S]*?<\/a>/;
content = content.replace(aTagRegex, '<MapNavigationButton />');

fs.writeFileSync(file, content, 'utf8');
console.log('Modified page.tsx');
