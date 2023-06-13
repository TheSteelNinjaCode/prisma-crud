import { PrismaClient, Users } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Page() {

    const users = await prisma.users.findMany();
    console.log("users: ", users);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user: Users) => (
                    <li key={user.id}>
                        <h2>{user.first_name}</h2>
                        <p>{user.last_name}</p>
                    </li>
                ))}
            </ul>

        </div>
    );
}
