import confs from "../confs";

export const upload = (params) => {
    $.ajax({
        url: confs.backendsURL + `/api/audit/commit`,
        method: 'post',
        headers: {
            // 'token':'token',
            'Content-Type':'multipart/form-data'
        },
        data: {
            file: params.file
        },
        // success:(rsp) =>{
        //     let data = rsp.data
        // }
    });
}