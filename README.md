# Lireddit

## How to Setup Database in Local
1. Install PgAdmin
2. Now ensure that your postgresql service is running on port `5432`
3. In pgadmin create a new server with following properties:
    
    1. Host name :- 127.0.0.1
    2. Name :- Lireddit (or you can give name as per your choice)
    3. Port :- 5432
    4. Maintainance Database :- postgres
    5. Username :- postgres
    6. Password :- postgres or password for username postgres (but don't forget to update the password in knexfile.ts)