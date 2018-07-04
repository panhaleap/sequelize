import 'dotenv/config';
import expresses from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import Sequelize from 'sequelize';
const Op = Sequelize.Op;

import { Student } from './models/student';

const app = expresses();
const port = process.env.port || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/test', async (req, res) => {
  // const [data] = await sequelize.query('Select * from student where id = :id', { replacements: { id: 1 } });
  // res.json(data);
  // await Student.create({ firstName: 'abc' });

  await Student.update({ firstName: '4444', lastName: '4444' }, { where: { id: 4 } });
  const data = await Student.findAll({
    where: {
      firstName: { [Op.like]: '%a%' }
    }
  });
  res.json(data);
});

app.listen(port, () => console.log(`Listen to port ${port}`));
