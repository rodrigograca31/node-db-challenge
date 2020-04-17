const DB = require("../data/db-config");
const TABLE = "resources";

const getAll = () => {
	return DB(TABLE);
};
const getById = id => {
	return DB(TABLE).where({ id });
};
const getForProject = id => {
	return (
		DB("projects")
			// .select({ abc: "projects.id" })
			.where("projects.id", "=", id)
			.join(
				"projects_resources",
				"projects_resources.project_id",
				"=",
				"projects.id"
			)
			.join(
				"resources",
				"resources.id",
				"=",
				"projects_resources.resource_id"
			)
	);
};

const insert = fields => {
	return DB(TABLE).insert(fields);
};

const update = (id, fields) => {
	return DB(TABLE)
		.where({ id })
		.update(fields);
};

const deleteEntry = ({ id }) => {
	return DB(TABLE)
		.where({ id })
		.delete();
};

module.exports = {
	getAll,
	insert,
	update,
	deleteEntry,
	getById,
	getForProject
};
