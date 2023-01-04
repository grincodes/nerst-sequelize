Resources for sequelize and nest sequelize
[ts-sequelize](https://github.com/sequelize/sequelize-typescript#column)
[nest sequelize](https://docs.nestjs.com/techniques/database#sequelize-integration)

Relationships

Has - (foreign key for the relation exists on the other model)
BelongsTo - (foreign key for the relation exists on this model)

Sequelize Transaction
A database transaction symbolizes a **unit of work** performed within a database management system against a database, and treated in a coherent and reliable way independent of other transactions.

Sequelize supports two ways of using transactions:
[Docs- resource 1](https://sequelize.org/v5/manual/transactions.html)

**Managed**, One which will automatically commit or rollback the transaction based on the result of a promise chain and, (if CLS enabled) pass the transaction to all calls within the callback
**Unmanaged**, One which leaves committing, rolling back and passing the transaction to the user
The key difference is that the managed transaction uses a callback that expects a promise to be returned to it while the unmanaged transaction returns a promise.

Unit of work pattern

[https://jideowosakin.com/unit-of-work-pattern-in-typescript/#:~:text=The%20Unit%20of%20Work%20pattern%20is%20used%20to%20group%20one,pass%20or%20fail%20as%20one.]