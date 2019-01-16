import { Router } from 'express';
import * as AppInfoController from '../controller';

const routes = new Router();

routes.post('/appinfo', AppInfoController.addAppInfo);
routes.get('/appinfo', AppInfoController.getAllAppInfos);
routes.get('/appinfo/:packageName', AppInfoController.getAppInfo);
routes.put('/appinfo/:oldPackageName', AppInfoController.updateAppInfo);
routes.delete('/appinfo/:packageName', AppInfoController.removeAppInfo);

export default routes;
