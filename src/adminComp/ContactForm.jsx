import React from 'react'

function ContactForm() {
  return (
    <>
      <div class="row py-5">
                  <form class="col-md-9 m-auto" method="post" role="form">
                    <div class="row">
                      <div class="form-group col-md-6 mb-3">
                        <label for="inputname">Fullname</label>
                        <input
                          type="text"
                          class="form-control mt-1"
                          id="name"
                          name="name"
                          placeholder="Fullname"
                        />
                      </div>
                      <div class="form-group col-md-6 mb-3">
                        <label for="inputemail">Phone number</label>
                        <input
                          type="text"
                          class="form-control mt-1"
                          id="email"
                          name="number"
                          placeholder="Phone number..."
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="form-group col-md-6 mb-3">
                        <label for="inputname">Address</label>
                        <input
                          type="text"
                          class="form-control mt-1"
                          id="name"
                          name="name"
                          placeholder="Address"
                        />
                      </div>
                      <div class="form-group col-md-6 mb-3">
                        <label for="inputemail">Evidence of Payment</label>
                        <input
                          type="file"
                          class="form-control mt-1"
                          id="email"
                          name="file"
                        />
                      </div>
                    </div>

                    <div class="mb-3">
                      <label for="inputmessage">Goods & Amount</label>
                      <textarea
                        class="form-control mt-1"
                        id="message"
                        name="message"
                        placeholder="Goods & Amount"
                        rows="3"
                      ></textarea>
                    </div>

                    <div class="row">
                      <div class="col text-end mt-2">
                        <button
                          type="submit"
                          class="btn btn-success btn-lg px-3"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
    </>
  )
}

export default ContactForm
