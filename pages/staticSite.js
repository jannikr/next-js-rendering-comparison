import React from "react";

export default function StaticSite(props) {
    return (
        <div>This is a static page
        {props.users.map((user) => (
            <li key={user.id}>{user.email}</li>
        ))}
        </div>
    )
}

export async function getStaticProps() {
    const res = await  fetch('https://reqres.in/api/users?page=1')
    const people = await res.json()

    return {
        props: {
            users: people.data,
        },
    }

}