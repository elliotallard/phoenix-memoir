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
    photo: [PoolDay, PoolSky, PoolTree],
    keyline: "The hangout. Where we would win(e)(d) down on Wednesdays, eat past-ripe watermelon, and sun while reading, until dizzy",
  },

  {
    id: "libr",
    rank: 400,
    name: "The Tempe Town Library",
    course: GC1,
    photo: [Book, Gathering, Tempe],
    keyline: "Where Sunday afternoons were spent, milling the aisles, picking up entertainment for the next 2 weeks. And hanging with fellow heat-dodgers.",
  },

  {
    id: "pati",
    rank: 300,
    name: "The Patio",
    course: GC3,
    photo: [Sunrise1, Sunrise2, Sunrise3],
    keyline: "My patio. Here early in the morning, late at night. To enjoy a sunrise, reflect on the week, or be boisterous with guests.",
  },

  {
    id: "cana",
    rank: 200,
    name: "The Canal Behind My Apt",
    course: GC5,
    photo: [Crack, Filled],
    keyline: "A cool spot. Would walk / run alongside of it, look in and see various inhabitants. Getting jumped on by dogs, some scratched more than others.",
  },

  {
    id: "seve",
    rank: 100,
    name: "N Seventh Ave",
    course: GC4,
    photo: [Boots, Boycott, OutSign],
    keyline: "Where all the gay / dive bars were located, and some lovers 💞. Many crawls here, will remember fondly ",
  },




];
