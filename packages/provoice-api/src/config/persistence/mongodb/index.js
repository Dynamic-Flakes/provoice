import mongoose from 'mongoose';

import connect from './connectdb';

export const close = mongo => mongo.disconnect();

export default async config => await connect(mongoose, config);