'use strict';
import runner from '../runner';

export default {
  up: (queryInterface, Sequelize) => {
    const CREATE_UPDATE_TIMESTAMP = {
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(
          'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
        ),
      },
    };

    const CREATE_USER = () =>
      queryInterface.createTable('users', {
        user_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },

        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },

        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        isVerified: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },

        ...CREATE_UPDATE_TIMESTAMP,
      });

    return runner.run([() => CREATE_USER()]);
  },

  down: (queryInterface, Sequelize) => {
    return runner.run([() => queryInterface.dropTable('users')]);
  },
};
