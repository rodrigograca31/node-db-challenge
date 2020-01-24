exports.up = function(knex) {
	return knex.schema
		.createTable("projects", tbl => {
			tbl.increments().notNullable(); // create column named "id", primary key, auto-incrementing
			tbl.text("name")
				.notNullable()
				.unique();
			tbl.string("description");
			tbl.boolean("completed")
				.notNullable()
				.defaultTo(false);
		})
		.createTable("resources", tbl => {
			tbl.increments().notNullable(); // create column named "id", primary key, auto-incrementing
			tbl.text("name")
				.notNullable()
				.unique();
			tbl.string("description");
		})
		.createTable("projects_resources", tbl => {
			// tbl.increments().notNullable(); // create column named "id", primary key, auto-incrementing
			// tbl.string("step", 250).notNullable();

			tbl.integer("project_id")
				.notNullable()
				.references("id")
				.inTable("projects")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");

			tbl.integer("resource_id")
				.notNullable()
				.references("id")
				.inTable("resources")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");

			tbl.primary(["project_id", "resource_id"]);
		})
		.createTable("tasks", tbl => {
			tbl.increments().notNullable(); // create column named "id", primary key, auto-incrementing

			tbl.string("description").notNullable();
			tbl.string("notes");
			tbl.boolean("completed")
				.notNullable()
				.defaultTo(false);
			tbl.integer("project_id")
				.notNullable()
				.references("id")
				.inTable("projects")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists("projects")
		.dropTableIfExists("resources")
		.dropTableIfExists("tasks")
		.dropTableIfExists("projects_resources");
};
