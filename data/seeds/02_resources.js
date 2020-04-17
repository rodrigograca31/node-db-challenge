exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("resources")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("resources").insert([
				{ id: 1, name: "Wood" },
				{ id: 2, name: "Steel" }
			]);
		});
};
