import { auth, currentUser } from "@clerk/nextjs/server";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;    
}

export default async function UsersServer() {
    const authObj = await auth();
    console.log("🚀 ~ UsersServer ~ authObj:", authObj)
    const currentUserObj = await currentUser();
    console.log("🚀 ~ UsersServer ~ currentUserObj:", currentUserObj)

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const users = await response.json();

    return (
        <ul className="space-y-4 p-4">
            {users.map((user: User) => (
                <li
                    key={user.id}
                    className="p-4 bg-white shadow-md rounded-lg text-grey-700"
                >
                    {user.name} ({user.email})
                </li>
            ))}
        </ul>
    )
}