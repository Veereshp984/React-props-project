import React from 'react'
import Card from './components/card';
const App = () => {
  const people = [
  {
    id: 1,
    name: "Sophie Bennett",
    role: "Product Designer who focuses on simplicity & usability.",
    followers: 312,
    posts: 48,
    verified: true,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    id: 2,
    name: "Liam Carter",
    role: "Frontend Developer passionate about clean UI.",
    followers: 540,
    posts: 76,
    verified: false,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    id: 3,
    name: "Ava Williams",
    role: "UX Researcher focused on human-centered design.",
    followers: 289,
    posts: 34,
    verified: true,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
  },
  {
    id: 4,
    name: "Noah Johnson",
    role: "Full Stack Developer & tech blogger.",
    followers: 620,
    posts: 102,
    verified: false,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },
  {
    id: 5,
    name: "Emma Brown",
    role: "UI Designer crafting modern interfaces.",
    followers: 410,
    posts: 59,
    verified: true,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  },
  {
    id: 6,
    name: "Oliver Smith",
    role: "Mobile App Designer & prototyping expert.",
    followers: 198,
    posts: 21,
    verified: false,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    id: 7,
    name: "Isabella Garcia",
    role: "Creative Director with a design-first mindset.",
    followers: 880,
    posts: 140,
    verified: true,
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
  },
  {
    id: 8,
    name: "Ethan Miller",
    role: "React Developer building scalable UI systems.",
    followers: 350,
    posts: 67,
    verified: false,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
  },
  {
    id: 9,
    name: "Mia Anderson",
    role: "Interaction Designer focused on micro-interactions.",
    followers: 470,
    posts: 88,
    verified: true,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    id: 10,
    name: "James Wilson",
    role: "Design Engineer bridging code & creativity.",
    followers: 265,
    posts: 42,
    verified: false,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  }
];
  return (
    <div className='h-screen bg-gray-400 flex flex-wrap'>
      {people.map((person)=>{
        return <Card key={person.id} name={person.name} role={person.role} followers={person.followers} posts={person.posts}  image={person.image} />
      })}
    </div>
  )
}

export default App