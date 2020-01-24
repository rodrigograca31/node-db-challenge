const DB = require("../data/db-config");
const TABLE = "ingredients";

const getAll = () => {
	return DB(TABLE);
};
const getById = id => {
	return DB(TABLE).where({ id });
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
	getById
};
