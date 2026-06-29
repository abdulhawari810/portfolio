export const success = (res, status = 200, message = "", data = null) => {
  if(!data){
    return res.status(status).json({ status, success: true, message })
  }

  return res.status(status).json({ status, success: true, message, data })
}

export const error = (res, status = 500, message = "Server Sedang Bermasalah", data = null) => {
  if(!data) {

    return res.status(status).json({ status, error: true, message })
  }
  return res.status(status).json({ status, error, message, data })
}

