import React from 'react';
import DestinationCard from './DestinationCard';
function DestinationPlaces(){
    const Destination_array=[
        {
            image:"https://img.magnific.com/premium-photo/badshahi-mosque-mughal-era-congregational-mosque-lahore_759575-4358.jpg?semt=ais_hybrid&w=740&q=80",
            title:"Lahore",
            description:"Lahore is the capital city of the Pakistani province of Punjab. It is the country's second-most populous city after Karachi, and is one of Pakistan's wealthiest cities.",
            location:"Pakistan",
            price:"$100"
        },
        {
            image:"https://img.magnific.com/premium-photo/18-january-2023-dubai-uae-scenic-view-dubai-skyline-with-skyscraper-buildings-national-flag-sightseeing-travel-destinations-arab-emirates_984126-306.jpg?semt=ais_hybrid&w=740&q=80",
            title:"Dubai",
            description:"Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture, and a vibrant nightlife scene.",
            location:"UAE",
            price:"$300"
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmjvNhCqhpdO26IcECN7LnXpxGI97eYfVMT_7ftJDDBQ&s=1024",
            title:"Saudia Arabia",
            description:"Saudi Arabia is a country in the Middle East known for its vast deserts, rich history, and Islamic heritage. It is home to the two holiest cities in Islam, Mecca and Medina.",
            location:"Saudi Arabia",
            price:"$200"
        }
    ]
    return(
        <div className="destination-places">
            <h2>Popular Destinations</h2>
            {Destination_array.map((place) => (
                <DestinationCard 
                image={place.image}
                title={place.title}
                description={place.description}
                location={place.location}
                price={place.price}
                />
            ))}
        </div>
    )
}
export default DestinationPlaces;