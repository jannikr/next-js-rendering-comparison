import React from "react";

export default function ServerSite(props) {
    return (
        <div>This is a server rendered page
            {props.users.map((user) => (
                <li key={user.id}>{user.email}</li>
            ))}
        </div>
    )
}

export async function getServerSideProps() {
    const res = await  fetch('https://reqres.in/api/users?page=1')
    const people = await res.json()
    console.log("Successful received data from API")
    return {
        props: {
            users: people.data,
        },
    }

}