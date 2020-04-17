exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("tasks")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("tasks").insert([
				{
					id: 1,
					description: "Talk to architect",
					notes: "he knows stuff",
					completed: 0,
					project_id: 1
				},
				{
					id: 2,
					description: "Buy materials",
					completed: 0,
					project_id: 1
				}
			]);
		});
};
