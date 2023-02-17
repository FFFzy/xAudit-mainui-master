import confs from "../confs";

export const upload = (params) => {
  $.ajax({
    url: confs.backendsURL + `/audit/upload`,
    method: "post",
    headers: {
      // 'token':'token',
      "Content-Type": "multipart/form-data",
    },
    data: {
      file: params.file,
    },
    success: (rsp) => {
      let data = rsp.data;
      console.log(data);
    },
    error: (err) => {
      console.log(err);
    },
  });
};
