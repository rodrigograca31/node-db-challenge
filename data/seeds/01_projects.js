exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("projects")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("projects").insert([
				{ id: 1, name: "Build a house", completed: 0 },
				{ id: 2, name: "Build table", completed: 0 },
				{
					id: 3,
					name: "Build website",
					description: "build my new blog",
					completed: 1
				}
			]);
		});
};
