export const apiEndPoint : string = 'https://api.ssoq.io';
export const ssoqToken : string = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YjBiZWUzZTAxMDcxMWVjODE2M2U3NmEyMDc3NmY4YiIsIm5hbWUiOiLshqHsp4Tqsr0iLCJyb2xlcyI6IlJPTEVfVVNFUiIsImlhdCI6MTY0Mzg3NjU0NiwiZXhwIjoxNjQ1MTcyNTQ2fQ.6uomFpkJWXgSaDEy73dwG9e3uONM2LdY3C9aNzB7SEg';

export const requestOption = {
    headers : {
        'content-type': 'application/json',
        'SSOQ-TOKEN' : ssoqToken
    }
}