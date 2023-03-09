---
title: "Quick Postgresql Setup for Mac"
metaTitle: "Easy, quick guide to setup postgresql on a mac via terminal (brew)"
socialImage: '/images/psql-logo.png'
date: "2023-11-02"
tags: 
  - Postgresql
  - Macbook
  - Brew
---

# The Best and Quickest way to setup Postgresql on a Macbook

If you have any old installs, lets just clear these out.

```
brew remove --force postgresql
brew remove --force postgresql@14
```


Delete the Postgres folders (silicon).

```
rm -rf /opt/homebrew/var/postgres
rm -rf /opt/homebrew/var/postgresql@14
```

If you have a intel macbook delete these folders:

```
rm -rf /usr/local/opt/homebrew/var/postgres
rm -rf /usr/local/opt/homebrew/var/postgresql@14
```

Reinstall Postgres with the latest @14:

```
brew install postgresql@14
```

Fire it up!

```
brew services start postgresql@14
```

If you get this message its already running:

```
Service `postgresql@14` already started, use `brew services restart postgresql@14` to restart.
```

Verify that it’s running:

`brew services list`

Now we should see that it has a LaunchAgent deamon file that will run when starting the service.

Other usefull commands for `Postgresql`:

```
brew services stop postgresql@14
brew services start postgresql@14
```

Create two new aliases to start and stop your postgres server. They could look something like this:

```
alias pg_start="launchctl load ~/Library/LaunchAgents"
alias pg_stop="launchctl unload ~/Library/LaunchAgents"
```

`pg_start` will start the database
`pg_stop` will stop the database

Run the command 

```
createdb `whoami`
```

Fix the `role "postgres" does not exist by running the following command:

```
createuser -s postgres
```

Test to connect to your database with the `psql` command 

```
mo9media@Andres-MacBook-Pro ~ % psql                
psql (14.7 (Homebrew))
Type "help" for help.

mo9media=# 
```

## Troubleshooting
Log files to check for errors are located at:

```
/opt/homebrew/var/log/postgresql@14.log
```

## Commands

### Create database
```
createdb <database_name>
```
> `createdb mydb_development`

### List databases
```
psql -U postgres -l
```

### Show tables in database
```
psql -U postgres -d <database_name>
```
> `psql -U postgres -d mydb_development`

### Drop database
```
dropdb <database_name>
```
> `dropdb mydb_development`

### Restart database
```
dropdb <database_name> && createdb <database_name>
```
> `dropdb mydb_development && createdb mydb_development`

# Step by step to create a new Postgres db for a new repo:


Start psql and open database postgres, which is the database postgres uses itself to store roles, permissions, and structure:

```
$ psql postgres
```

We need to create a role (user) with permissions to login (`LOGIN`) and create databases (`CREATEDB`). In PostgreSQL, there is no difference between users and roles. A user is simply a role with login permissions. The first line below could be rewritten as `CREATE USER` myuser:

```
postgres-# CREATE ROLE myuser WITH LOGIN;
postgres-# ALTER ROLE myuser CREATEDB;
```

Note that the user has no password. Listing users `\du` should look like this:

```
postgres-# \du
                                    List of roles
  Role name  |                         Attributes                         | Member of 
-------------+------------------------------------------------------------+-----------
 <root user> | Superuser, Create role, Create DB, Replication, Bypass RLS | {}
 myuser      | Create DB                                                  | {}
```

Quit psql, because we will login with the new user to create a database:

```
postgres-# \q
```

In shell/bash/zsh, open psql with postgres database with user myuser:
```
$ psql postgres -U myuser
```

Note that the postgres prompt looks different, because we’re not logged in as a root user anymore. We’ll create a database and grant all privileges to our user:
```
postgres-> CREATE DATABASE mydatabase;
postgres-> GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;
```

List databases to verify:

```
postgres-> \list
```

If you want to connect to a database and list all tables:
```
postgres-> \c mydatabase
mydatabase-> \dt
```

...should print Did not find any relations. for an empty database. To quit the postgres CLI:

```
mydatabase-> \q
```

Finally, in a .env file for Node.js software development, your database connection string should look like this:

```
PG_CONNECTION_STRING=postgres://myuser@localhost/mydatabase
```



