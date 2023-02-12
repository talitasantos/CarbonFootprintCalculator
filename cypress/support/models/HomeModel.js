// #region Constants

// #endregion

// #region Imports
import { faker } from '@faker-js/faker';
// #endregion

const HomeModel = {
    "VALID_ZIP_CODE": "92793",
    "RANDOM_NUMER_OF_PEOPLE": faker.random.numeric(2),
    "INVALID_ZIP_CODE": '123',
    "INVALID_NUMER_OF_PEOPLE": '-1',
}

export default HomeModel