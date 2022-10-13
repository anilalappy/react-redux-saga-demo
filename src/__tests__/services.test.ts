import { User } from '../redux/types';
import { deleteRequest, getRequest,postRequest, putRequest } from './../utils/services';
describe("Axios API service test", () => {

    test('Get API request/response test',async () => {
        const response:any = await getRequest('users');
        expect(response?.length).toBeGreaterThanOrEqual(1) 
    })

    /* test('Delete API request/response test',async () => {
        const {userId} = {userId:1};
        const id:number = userId
        const response:any = await deleteRequest({endpoint:'users',id:id});
        console.log(response);
        expect(response).toEqual({}) 
    }) */

    // test('Post API request/response test',async () => {
    //     const param:User = {
    //         name:'Mike',
    //         username:'Mikes',
    //         email:'mike@test.com'
    //     }
    //     const response:any = await postRequest({endpoint:'users',param:param});
    //     expect(Object.keys(response).length).toBeGreaterThanOrEqual(1)
    // })  

    // test('Put API request/response test',async () => {
    //     const {id} = {id:1}
    //     const param:User = {
    //         id:id,
    //         name:'Mike',
    //         username:'Mikes',
    //         email:'mike@test.com'
    //     }
    //     const response:any = await putRequest({endpoint:'users',param:param});
    //     expect(Object.keys(response).length).toBeGreaterThanOrEqual(1)
    // })  

})