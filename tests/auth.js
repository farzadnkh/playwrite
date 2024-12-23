import { request } from "@playwright/test";

export async function getAccessToken() {
  const apiRequest = await request.newContext();

  const registerResponse = await apiRequest.post(
    "https://stage-api.780.ir/authserver/register",
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        Authorization:
          "Bearer eyJhbGciOiJFUzUxMiIsImtpZCI6IjAwMDEyZDgwLWUxZWYtNDM4Zi05ZjQzLTEwY2RiMmMwODA3MiIsInR5cCI6IkpXVCJ9.eyJhZ2VudCI6IjdiNmYwYzM3M2ZlYjk4MDc4NzE5ZGMxNTUzNDlkOTU5Zjk4ZDM1ZmUiLCJhdWQiOiJXRUIiLCJhdXRob3JpdGllcyI6bnVsbCwiY2xpZW50IjoidW5rbm93biIsImV4cCI6MTczNDk1NTc5OSwiaXNzIjoiYXV0aHNlcnZlciIsImp0aSI6ImYyODlmZjAwLTE1YmItNDA4ZS04MjQyLTg2YzMxMjU4ZjkyZiIsImt5YyI6MCwibW9iaWxlIjoiIiwibW9iaWxlX25vIjoiYWlNdHRYUG1LVnJvR0FCbFNkNVRMUT09IiwibmJmIjoxNzM0OTQwNzk5LCJub25fb3RwIjoiZ3Vlc3QiLCJwZXJtaXNzaW9ucyI6bnVsbCwic2NvcGUiOiJzaG9wIiwic2VjcmV0IjoiNjMzNDhiOTU2NjNhMjZkYWI3YzIyNDczYjFiOWM2ZWQyYTE2MzI0ZiIsInN1YiI6IjMyOTdiNzJmLTAxMDAtNGMxYS1iYjQzLWI2NGRlOGE3NmJhMyIsIndhbGxldCI6InRydWUifQ.AeAjz_etRVCwzgWQGNXWcMjeQ3X96IQBqxZYrYlqWiO6dbTG0DL3dsQ8ZPlIVGp716v4aQE_qVxTAm-5s2NRuhsCAC-xppoH78zoP_QSjDf1OoZiz0on4Uay30njLUXGdLikS12ryciTjLiXtJMCsuqPGmppzBN0XsMk9SM5nukHLwor",
        "Content-Type": "application/json",
        "Grpc-metadata-Device-Info": "LG-a65sd14",
        "Grpc-metadata-Platform": "WEBSITE",
        "Grpc-metadata-Version": "20000",
        client: "web",
        mobile_no: "09148918991",
      },
      data: {},
    }
  );

  if (registerResponse.status() !== 200) {
    throw new Error(`ثبت‌نام با خطا مواجه شد: ${registerResponse.status()}`);
  }

  const tokenResponse = await apiRequest.post(
    "https://stage-api.780.ir/authserver/token",
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        Authorization:
          "Bearer eyJhbGciOiJFUzUxMiIsImtpZCI6IjAwMDEyZDgwLWUxZWYtNDM4Zi05ZjQzLTEwY2RiMmMwODA3MiIsInR5cCI6IkpXVCJ9.eyJhZ2VudCI6IjdiNmYwYzM3M2ZlYjk4MDc4NzE5ZGMxNTUzNDlkOTU5Zjk4ZDM1ZmUiLCJhdWQiOiJXRUIiLCJhdXRob3JpdGllcyI6bnVsbCwiY2xpZW50IjoidW5rbm93biIsImV4cCI6MTczNDk1NTc5OSwiaXNzIjoiYXV0aHNlcnZlciIsImp0aSI6ImYyODlmZjAwLTE1YmItNDA4ZS04MjQyLTg2YzMxMjU4ZjkyZiIsImt5YyI6MCwibW9iaWxlIjoiIiwibW9iaWxlX25vIjoiYWlNdHRYUG1LVnJvR0FCbFNkNVRMUT09IiwibmJmIjoxNzM0OTQwNzk5LCJub25fb3RwIjoiZ3Vlc3QiLCJwZXJtaXNzaW9ucyI6bnVsbCwic2NvcGUiOiJzaG9wIiwic2VjcmV0IjoiNjMzNDhiOTU2NjNhMjZkYWI3YzIyNDczYjFiOWM2ZWQyYTE2MzI0ZiIsInN1YiI6IjMyOTdiNzJmLTAxMDAtNGMxYS1iYjQzLWI2NGRlOGE3NmJhMyIsIndhbGxldCI6InRydWUifQ.AeAjz_etRVCwzgWQGNXWcMjeQ3X96IQBqxZYrYlqWiO6dbTG0DL3dsQ8ZPlIVGp716v4aQE_qVxTAm-5s2NRuhsCAC-xppoH78zoP_QSjDf1OoZiz0on4Uay30njLUXGdLikS12ryciTjLiXtJMCsuqPGmppzBN0XsMk9SM5nukHLwor",
        "Content-Type": "application/json",
        "Grpc-metadata-Device-Info": "LG-a65sd14",
        "Grpc-metadata-Platform": "WEBSITE",
        "Grpc-metadata-Version": "20000",
        client: "web",
        mobile_no: "09148918991",
      },
      data: {
        code: "1234",
      },
    }
  );

  if (tokenResponse.status() !== 200) {
    throw new Error(`دریافت توکن با خطا مواجه شد: ${tokenResponse.status()}`);
  }

  const responseBody = await tokenResponse.json();
  return responseBody.access_token;
}
