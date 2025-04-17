import { users, User } from "./data";

export async function GET() {
    return Response.json(users);
}

export async function POST(request: Request): Promise<Response> {
    const user: User = await request.json();
    const newUser: User = {
        id: users.length + 1,
        name: user.name
    };
    users.push(newUser);
    return new Response(JSON.stringify(newUser), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201
    });
}