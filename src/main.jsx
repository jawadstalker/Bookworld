import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, BookOpen, Bookmark, ChevronDown, ChevronLeft, ChevronRight,
  Compass, Flame, Heart, Menu, Search, Sparkles, Star, X
} from "lucide-react";
import "./styles.css";

const books = [
  { title: "Mistborn: The Final Empire", author: "Brandon Sanderson", genre: "Fantasy", rating: "4.8", image: "https://raw.githubusercontent.com/jawadstalker/Bookworld/main/Playmat-_0002_Mistborn.png", tag: "Reader favorite" },
  { title: "The Curse of Infinity", author: "Rachel Hetrick", genre: "Fantasy", rating: "4.6", image: "https://raw.githubusercontent.com/jawadstalker/Bookworld/main/The-Curse-of-Infinity-by-Rachel-Hetrick.png", tag: "New discovery" },
  { title: "The Witcher", author: "Andrzej Sapkowski", genre: "Adventure", rating: "4.7", image: "https://raw.githubusercontent.com/jawadstalker/Bookworld/main/Magali-Villenevue-Witcher-cover.jpg", tag: "Staff pick" },
  { title: "The Lord of the Rings", author: "J. R. R. Tolkien", genre: "Classic fantasy", rating: "4.9", image: "https://raw.githubusercontent.com/jawadstalker/Bookworld/main/9780006479888_1.webp", tag: "Timeless classic" },
  { title: "A Story to Remember", author: "Sarah Slaughter", genre: "Fiction", rating: "4.5", image: "https://raw.githubusercontent.com/jawadstalker/Bookworld/main/slaughter.jpg", tag: "Popular" },
  { title: "Beyond the Pages", author: "L. J. Byers", genre: "Drama", rating: "4.4", image: "https://raw.githubusercontent.com/jawadstalker/Bookworld/main/webp_ljbyers.webp", tag: "Worth a read" },
];
const genres = ["All books", "Fantasy", "Adventure", "Classic fantasy", "Fiction", "Drama"];
const authors = [
  { name: "J. R. R. Tolkien", image: "https://raw.githubusercontent.com/jawadstalker/Bookworld/main/J._R._R._Tolkien,_ca._1925.jpg", note: "The architect of Middle-earth" },
  { name: "Brandon Sanderson", image: "https://raw.githubusercontent.com/jawadstalker/Bookworld/main/sanderson-1-superJumbo.jpg", note: "Worlds built on imagination" },
  { name: "George R. R. Martin", image: "https://raw.githubusercontent.com/jawadstalker/Bookworld/main/Portrait_photoshoot_at_Worldcon_75,_Helsinki,_before_the_Hugo_Awards_–_George_R._R._Martin_(cropped).jpg", note: "Stories of fire and ice" },
  { name: "J. K. Rowling", image: "https://raw.githubusercontent.com/jawadstalker/Bookworld/main/j-k-rowling.png", note: "A little magic in every page" },
];
function App() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All books");
  const [saved, setSaved] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const filtered = useMemo(() => books.filter(b =>
    (genre === "All books" || b.genre === genre) &&
    (b.title + b.author + b.genre).toLowerCase().includes(query.toLowerCase())
  ), [genre, query]);
  const toggleSave = (title) => setSaved(s => s.includes(title) ? s.filter(x => x !== title) : [...s, title]);
  const featured = [
    { eyebrow: "THE ART OF GETTING LOST", title: "Every book is a door.
Find the one that calls you.", desc: "From unforgettable worlds to ideas that stay with you, your next favorite story is waiting.", image: "https://raw.githubusercontent.com/jawadstalker/Bookworld/main/wp6749559.jpg" },
    { eyebrow: "WORLDS BEYOND OURS", title: "A little wonder
changes everything.", desc: "Explore remarkable stories, meet new perspectives, and let your imagination wander.", image: "https://raw.githubusercontent.com/jawadstalker/Bookworld/main/wp6749549.png" },
    { eyebrow: "YOUR NEXT CHAPTER", title: "Make room for
a new adventure.", desc: "Discover books picked for curious minds and readers who love a good story.", image: "https://raw.githubusercontent.com/jawadstalker/Bookworld/main/188c7ay8xw891.jpg" }
  ];
  return <div className="app-shell">
    <header className="topbar">
      <a className="brand" href="#"><span className="brand-mark"><BookOpen size={21}/></span><span>book<span className="brand-light">world</span><small>READ BEYOND</small></span></a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a className="active" href="#">Discover</a><a href="#popular">Books</a><a href="#authors">Authors</a><a href="#genres">Genres</a>
      </nav>
      <div className="top-actions">
        <label className="search-box"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search books, authors..." /></label>
        <button className="icon-button saved-top" aria-label="Saved books"><Bookmark size={18}/>{saved.length > 0 && <i>{saved.length}</i>}</button>
        <a className="signin" href="https://raw.githubusercontent.com/jawadstalker/Bookworld/main/login.html">Sign in <ArrowRight size={15}/></a>
        <button className="mobile-menu icon-button" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen?<X/>:<Menu/>}</button>
      </div>
    </header>
    <main>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span></span>{featured[slide].eyebrow}</div>
          <h1>{featured[slide].title.split("\n").map((line,i)=><React.Fragment key={line}>{i>0&&<br/>}{line}</React.Fragment>)}</h1>
          <p>{featured[slide].desc}</p>
          <div className="hero-buttons"><a className="primary-btn" href="#popular">Explore library <ArrowRight size={17}/></a><a className="text-link" href="#genres">Browse genres <ChevronDown size={15}/></a></div>
          <div className="hero-bottom"><div className="avatars"><img src="https://raw.githubusercontent.com/jawadstalker/Bookworld/main/J._R._R._Tolkien,_ca._1925.jpg"https://raw.githubusercontent.com/jawadstalker/Bookworld/main/><img src="https://raw.githubusercontent.com/jawadstalker/Bookworld/main/sanderson-1-superJumbo.jpg"https://raw.githubusercontent.com/jawadstalker/Bookworld/main/><img src="https://raw.githubusercontent.com/jawadstalker/Bookworld/main/j-k-rowling.png"https://raw.githubusercontent.com/jawadstalker/Bookworld/main/></div><span><b>For the love of stories</b><br/>A universe of books, one click away</span></div>
        </div>
        <div className="hero-art">
          <div className="hero-glow"></div><img className="hero-image" src={featured[slide].image} alt="Featured fantasy book artwork"https://raw.githubusercontent.com/jawadstalker/Bookworld/main/>
          <div className="floating-note"><span className="note-icon"><Sparkles size={17}/></span><span><b>Find your next favorite</b><small>Curated for curious minds</small></span></div>
          <div className="hero-counter"><span>0{slide+1}</span><i></i> 0{featured.length}</div>
        </div>
        <div className="hero-controls"><button onClick={()=>setSlide((slide+featured.length-1)%featured.length)} aria-label="Previous slide"><ChevronLeft/></button><button onClick={()=>setSlide((slide+1)%featured.length)} aria-label="Next slide"><ChevronRight/></button></div>
      </section>
      <section className="stats-strip"><div><strong>10k<span>+</span></strong><small>Books to explore</small></div><div><strong>2.5k<span>+</span></strong><small>Authors to meet</small></div><div><strong>50<span>+</span></strong><small>Genres & worlds</small></div><div className="stats-quote">“A reader lives a thousand lives before he dies.” <small>— George R. R. Martin</small></div></section>
      <section className="section-block" id="popular">
        <div className="section-heading"><div><div className="eyebrow muted"><Flame size={14}/> THE COMMUNITY LOVES THESE</div><h2>Popular <em>right now</em></h2><p>Stories readers can’t stop talking about.</p></div><a className="view-all" href="https://raw.githubusercontent.com/jawadstalker/Bookworld/main/book.html">View all books <ArrowRight size={16}/></a></div>
        <div className="genre-pills" id="genres">{genres.map(g=><button key={g} className={genre===g?"selected":""} onClick={()=>setGenre(g)}>{g}</button>)}</div>
        <div className="book-grid">{filtered.map((book,i)=><article className="book-card" key={book.title}><div className="cover-wrap"><img src={book.image} alt={book.title}/><span className="book-tag">{book.tag}</span><button className={saved.includes(book.title)?"save-button saved":"save-button"} onClick={()=>toggleSave(book.title)} aria-label="Save book"><Heart size={17} fill={saved.includes(book.title)?"currentColor":"none"}/></button></div><div className="book-meta"><span>{book.genre}</span><span className="rating"><Star size={13} fill="currentColor"https://raw.githubusercontent.com/jawadstalker/Bookworld/main/>{book.rating}</span></div><h3>{book.title}</h3><p>{book.author}</p><a href="https://raw.githubusercontent.com/jawadstalker/Bookworld/main/book.html" className="card-link">Discover book <ArrowRight size={14}/></a></article>)}</div>
        {filtered.length===0&&<div className="empty-state">No books found. Try another title or genre.</div>}
      </section>
      <section className="quote-banner"><div className="quote-mark">“</div><div><p>Books are a uniquely portable magic.</p><span>STEP INTO A STORY. COME BACK A LITTLE DIFFERENT.</span></div><a href="#popular">Find your magic <ArrowRight size={16}/></a></section>
      <section className="section-block authors-block" id="authors"><div className="section-heading"><div><div className="eyebrow muted"><BookOpen size={14}/> THE MINDS BEHIND THE MAGIC</div><h2>Meet the <em>authors</em></h2><p>Get to know the storytellers behind your favorite worlds.</p></div><a className="view-all" href="#authors">Explore authors <ArrowRight size={16}/></a></div><div className="authors-grid">{authors.map(a=><article className="author-card" key={a.name}><img src={a.image} alt={a.name}/><div><h3>{a.name}</h3><p>{a.note}</p></div><ArrowRight size={17}/></article>)}</div></section>
    </main>
    <footer><a className="brand" href="#"><span className="brand-mark"><BookOpen size={19}/></span><span>book<span className="brand-light">world</span><small>READ BEYOND</small></span></a><p>For every story still waiting to be found.</p><span>© 2026 Bookworld</span></footer>
  </div>;
}
createRoot(document.getElementById("root")).render(<App/>);
