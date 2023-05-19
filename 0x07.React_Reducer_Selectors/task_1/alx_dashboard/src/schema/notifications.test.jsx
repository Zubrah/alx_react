import normalizedData from './notifications';
import notificationsData from '../../dist/notifications.json';

describe('normalized notifications data', () => {
  it('should have a correct result array', () => {
    const expectedIds = [
      "5debd76480edafc8af244228",
      "5debd764507712e7a1307303",
      "5debd76444dd4dafea89d53b",
      "5debd76485ee4dfd1284f97b",
      "5debd7644e561e022d66e61a",
      "5debd7644aaed86c97bf9d5e",
      "5debd76413f0d5e5429c28a0",
      "5debd7642e815cd350407777",
      "5debd764c1127bc5a490a4d0",
      "5debd7646ef31e0861ec1cab",
      "5debd764a4f11eabef05a81d",
      "5debd764af0fdd1fc815ad9b",
      "5debd76468cb5b277fd125f4",
      "5debd764de9fa684468cdc0b"

    ]
    expect(normalizedData.result).toEqual(expectedIds);
  });

  it('should have a correct users entity', () => {
    const expectedUser =
    {
      age: 25,
      email: "fred.swaniker@alxstudent.com",
      id: "5debd764a7c57c7839d722e9",
      name: { first: "Fred", last: "Swaniker" },
      picture: "http://placehold.it/32x32",

    }

    expect(normalizedData.entities.users['5debd764a7c57c7839d722e9']).toEqual(expectedUser);
  });

  it('should have a correct messages entity', () => {
    const expectedMessage = {
      guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      isRead: false,
      type: "default",
      value: "Cursus risus at ultrices mi.",
    }
    expect(normalizedData.entities.messages['efb6c485-00f7-4fdf-97cc-5e12d14d6c41']).toEqual(expectedMessage.message);
  });

  it('should have a correct notifications entity', () => {
    const expectedNotification = {
      author: "5debd764f8452ef92346c772",
      context: undefined,
      id: "5debd7642e815cd350407777"

    };
    expect(normalizedData.entities.notifications['5debd7642e815cd350407777']).toEqual(expectedNotification);
  });
});
