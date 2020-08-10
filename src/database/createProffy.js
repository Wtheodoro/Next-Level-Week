//To run if await we need to use an async function
module.exports = async function (db, {proffyValue, classValue, classScheduleValue}) {
    // insert data on teachers table
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            ${proffyValue.name},
            ${proffyValue.avatar},
            ${proffyValue.whatsapp}
            ${proffyValue.bio}
        );
    `)

    const proffy_id = insertedProffy.lastID
    
}