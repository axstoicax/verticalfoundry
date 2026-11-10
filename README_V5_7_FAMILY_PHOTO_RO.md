# VerticalFoundry v5.7 — update About / fotografia de familie

Bază: VerticalFoundry v5.6, arhiva editorială din 8 noiembrie 2026.

## Modificări
- Am adăugat numai în `/about/` o secțiune editorială cu fotografia de familie transmisă de fondator, după paragrafele despre copilărie.
- Fișier nou: `public/images/alexandru-family-childhood.webp` (conversie fără alterarea compoziției imaginii).
- Am adăugat stiluri adaptive pentru noua secțiune în `app/globals.css`.
- În JSON-LD al paginii About, am introdus `associatedMedia` și un nod `ImageObject` dedicat imaginii arhivistice. Fotografia oficială de profil a fondatorului rămâne neschimbată.
- Versiunea actualizată la 5.7.0.

## Ce nu s-a schimbat
Homepage, Products, Etsy și cele 37 FAQ, Contact, paginile juridice, navigația, footerul, logo-urile originale, profilurile `sameAs`, EIN, restul Schema.org și designul aprobat.

## Publicare GitHub + Vercel
Dezarhivează conținutul direct la rădăcina repository-ului existent. În Vercel folosește proiectul Next.js asociat și execută `npm run build`. Verifică `/about/` pe desktop și mobil și linkurile înainte de a promova deployul în producție.

## Atenție la drepturile și acordurile de publicare
Fotografia îl include și pe fratele fondatorului. Înainte de publicare, recomand confirmarea acordului său și verificarea drepturilor de utilizare a fotografiei de familie.
