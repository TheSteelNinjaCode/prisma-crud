PS E:\XAMPP\htdocs\projects\NextJs\prisma-crud> npm install prisma

added 2 packages, and audited 294 packages in 3m

116 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS E:\XAMPP\htdocs\projects\NextJs\prisma-crud> npx prisma

Prisma is a modern DB toolkit to query, migrate and model your database (https://prisma.io)

Usage

  $ prisma [command]

Commands

            init   Set up Prisma for your app
        generate   Generate artifacts (e.g. Prisma Client)
              db   Manage your database schema and lifecycle
         migrate   Migrate your database
          studio   Browse your data with Prisma Studio
        validate   Validate your Prisma schema
          format   Format your Prisma schema

Flags

     --preview-feature   Run Preview Prisma commands

Examples

  Set up a new Prisma project
  $ prisma init

  Generate artifacts (e.g. Prisma Client)
  $ prisma generate

  Browse your data
  $ prisma studio

  Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
  $ prisma migrate dev

  Pull the schema from an existing database, updating the Prisma schema
  $ prisma db pull

  Push the Prisma schema state to the database
  $ prisma db push

  Validate your Prisma schema
  $ prisma validate

  Format your Prisma schema
  $ prisma format


  Install and generate Prisma Client
To get started with Prisma Client, you need to install the @prisma/client package:

npm install @prisma/client 
Notice that the install command automatically invokes prisma generate for you which reads your Prisma schema and generates a version of Prisma Client that is tailored to your models.

to view the database tables
npx prisma studio