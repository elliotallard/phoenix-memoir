// IMAGES


//COURSES AT THE FRONT
import GC1 from "../../assets/gcourse1.png";
import GC2 from "../../assets/gcourse2.png";
import GC3 from "../../assets/gcourse3.png";
import GC4 from "../../assets/gcourse4.png";
import GC5 from "../../assets/gcourse5.png";

//CANAL
import Crack from "../../assets/images/canal/crack.jpg";
import Filled from "../../assets/images/canal/filled.jpg";
import Lake from "../../assets/images/canal/lake.jpg";

//LIBRARY
import Book from "../../assets/images/library/book.jpg";
import Gathering from "../../assets/images/library/gathering.jpg";
import Tempe from "../../assets/images/library/tempe.jpg";

//PATIO
import Sunrise1 from "../../assets/images/patio/sunrise1.jpg";
import Sunrise2 from "../../assets/images/patio/sunrise2.jpg";
import Sunrise3 from "../../assets/images/patio/sunrise3.jpg";

//POOL
import PoolDay from "../../assets/images/pool/poolday.jpg";
import PoolSky from "../../assets/images/pool/poolsky.jpg";
import PoolTree from "../../assets/images/pool/pooltree.jpg";

//SEVENTH
import Boots from "../../assets/images/seventh/boots.jpg";
import Boycott from "../../assets/images/seventh/boycott.jpg";
import OutSign from "../../assets/images/seventh/outsign.jpg";


export default [
  {
    id: "pool",
    rank: 500,
    name: "The Pool",
    course: GC2,
    photos: [PoolDay, PoolSky, PoolTree],
    keyline: "The hangout. Where we'd win(e)(d) down on Wednesdays, eat past-ripe watermelon, and sun while reading",
  },

  {
    id: "libr",
    rank: 400,
    name: "The Tempe Town Library",
    course: GC1,
    photos: [Book, Gathering, Tempe],
    keyline: "Where Sunday afternoons were spent, milling the aisles",
  },

  {
    id: "pati",
    rank: 300,
    name: "The Patio",
    course: GC3,
    photos: [Sunrise1, Sunrise2, Sunrise3],
    keyline: "My patio. Here early in the morning, late at night.",
  },

  {
    id: "cana",
    rank: 200,
    name: "The Canal Behind My Apt",
    course: GC5,
    photos: [Lake, Filled, Crack],
    keyline: "Would walk / run alongside of it.",
  },

  {
    id: "seve",
    rank: 100,
    name: "N Seventh Ave",
    course: GC4,
    photos: [Boots, Boycott, OutSign],
    keyline: "Where all the gay bars were",
  },




];
