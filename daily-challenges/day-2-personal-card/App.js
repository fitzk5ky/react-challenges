import './App.css';


/**
 * PersonalCard is a React functional component that displays a personal profile card.
 * It shows the user's avatar, name, age, location, profession, and a short bio.
 *
 * @component
 * @example
 * return (
 *   <PersonalCard />
 * )
 */
const PersonalCard = () => {
  const person = {
    name: "Ky Fitzgerald",
    age: 34,
    location: "New York",
    avatar: 'https://placehold.co/150',
    profession: "WordPress Developer",
    bio: "Learning React and building personal projects."
  };//this is an object with my information for the personal card

  return (
    <div className="personal-card">
      {/*header section*/}
      <header className="personal-card-header">
        <img src={person.avatar} className="avatar-logo" alt={`${person.name}'s avatar`} />
      </header>
      {/*user info section*/}
      <section className="personal-card-info">
        <h2 className="name">{person.name}</h2>
        <p className="age">Age: {person.age}</p>
        <p className="location">Location: {person.location}</p>
        <p className="profession">Profession: {person.profession}</p>
        <p className="bio">Bio: {person.bio}</p>
      </section>
      
    </div>
  );
};

export default PersonalCard;
