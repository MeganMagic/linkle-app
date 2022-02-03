export const apiEndPoint : string = 'https://api.ssoq.io';
export const ssoqToken : string = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YjBiZWUzZTAxMDcxMWVjODE2M2U3NmEyMDc3NmY4YiIsIm5hbWUiOiLshqHsp4Tqsr0iLCJyb2xlcyI6IlJPTEVfVVNFUiIsImlhdCI6MTY0MjU1OTU0MCwiZXhwIjoxNjQzODU1NTQwfQ.YtaiF-Yjr0Zz8sjx1MHbfXcmYihKIg9ii05nRhGQPoI';

export const requestOption = {
    headers : {
        'content-type': 'application/json',
        'SSOQ-TOKEN' : ssoqToken
    }
}