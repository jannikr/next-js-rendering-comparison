import React, {useEffect, useState} from "react";

export default function ClientSite() {
    const [ people, setPeople ] = useState()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch('https://reqres.in/api/users?page=1')
            .then(response => response.json())
            .then(data => {
                setPeople(data)
                setIsLoading(false)
            })
    }, [])
    if (isLoading) {
        return <p>Loading....</p>
    }
    if (!people) {
        return <p>No List to show</p>
    }
    return (
        <div>This is a static page
            {people.data.map((user) => (
                <li key={user.id}>{user.email}</li>
            ))}
        </div>
    )
}