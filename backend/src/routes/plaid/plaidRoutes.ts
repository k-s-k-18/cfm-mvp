import { Router } from "express";
import {createLinkToken} from '../../controllers/plaidControllers/plaidControllers'

const router = Router();


router.post('/create_link_token',createLinkToken);

export default router;