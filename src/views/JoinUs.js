import React from "react";

import FormGambar from "../components/FormGambar";

// Controlled Component
class JoinUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      jenkel: "",
      umur: 0,
      date: [],
      kegiatan: [],
      alamat: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onPick = this.onPick.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const {
      firstName,
      lastName,
      jenkel,
      umur,
      date,
      kegiatan,
      alamat,
    } = this.state;
    alert(
      `Data Kamu sebagai berikut:
      Nama depan : ${firstName}
      Nama belakang : ${lastName}
      Umur : ${umur}
      Tanggal lahir : ${date}
      Jenis kelamin : ${jenkel}
      Kegiatan : ${kegiatan}
      Alamat : ${alamat}
      Sukses dikirim!`
    );
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  onPick(event) {
    let kegiatan = [...this.state.kegiatan];
    let index = kegiatan.findIndex((elemen) => event.target.value === elemen);
    if (index > 0) {
      kegiatan = [
        ...kegiatan.slice(0, index),
        ...kegiatan.slice(index + 1, kegiatan.length),
      ];
    } else if (index === 0) {
      kegiatan = [...kegiatan.slice(index + 1, kegiatan.length)];
    } else {
      kegiatan.push(event.target.value);
    }
    this.setState({ kegiatan });
  }

  render() {
    const { lastName, firstName, date, umur, kegiatan, alamat } = this.state;

    return (
      <div className="container">
        <h1 className="text-center">Registration form for members</h1>
        <div className="row mb-5 pt-5">
          <form
            onSubmit={this.onSubmit}
            className="col-md-7 col-lg-6 mb-4 pt-3"
          >
            {/* Input Nama */}
            <label>Name : </label>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  name="firstName"
                  value={firstName}
                  onChange={this.onChange}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  name="lastName"
                  value={lastName}
                  onChange={this.onChange}
                />
              </div>
            </div>
            {/* Input Taggal Lahir */}
            <div className="form-group">
              <label>Tanggal Lahir : </label>
              <input
                type="date"
                name="date"
                value={date}
                onChange={this.onChange}
                className="form-control"
              />
            </div>
            {/* Umur */}
            <div className="form-group">
              <label>Umur : </label>
              <input
                type="number"
                name="umur"
                value={umur}
                onChange={this.onChange}
                className="form-control"
                placeholder="18 Age"
              />
            </div>
            {/* Kegiatan */}
            <div className="form-group">
              <label>Pekerjaan/Kegiatan :</label>
              <select
                multiple
                className="form-control"
                value={kegiatan}
                onChange={this.onPick}
              >
                <option value="Pelajar">Pelajar</option>
                <option value="Mahasiswa">Mahasiswa</option>
                <option value="Pekerja">Pekerja</option>
                <option value="Pembisnis">Pembisnis</option>
                <option value="Lain-lain">Lain-lain</option>
              </select>
            </div>
            {/* Jenis kelamin */}
            <label>Jenis Kelamin :</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="Pria"
                name="jenkel"
                onChange={this.onChange}
                checked={this.state.jenkel === "Pria"}
              />
              <label className="form-check-label">Pria</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="Wanita"
                name="jenkel"
                onChange={this.onChange}
                checked={this.state.jenkel === "Wanita"}
              />
              <label className="form-check-label">Wanita</label>
            </div>
            {/* Alamat */}
            <div className="form-group">
              <label>Alamat Lengkap</label>
              <textarea
                className="form-control"
                name="alamat"
                value={alamat}
                onChange={this.onChange}
                rows="3"
              ></textarea>
            </div>
            <button className="btn btn-outline-dark" type="submit">
              Daftar !
            </button>
          </form>

          <div className="col-md-3 col-lg-4 d-none d-md-block offset-2">
            <FormGambar />
            <h5>
              <span className="text-danger">Come join,</span> and become our
              member!
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default JoinUs;
