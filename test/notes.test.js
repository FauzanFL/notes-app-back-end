/* eslint-disable import/extensions */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
import { expect, use } from 'chai';
import chaiHttp from 'chai-http';
// import { nanoid } from 'nanoid';

const chai = use(chaiHttp);
const url = 'http://localhost:5000';

let id = 0;

describe('Notes API', () => {
  describe('Add Note', () => {
    it('should return success response', (done) => {
      chai.request
        .execute(url)
        .post('/notes')
        .send({
          title: 'Olahraga',
          tags: 'health',
          body: 'Berolahraga setiap pagi',
        })
        .end((err, res) => {
          expect(res.body).to.have.status('success');
          expect(res.body).to.have.property('data');
          id = res.body.data.noteId;
          done();
        });
    });
  });

  describe('Get All Notes', () => {
    it('should return all notes', (done) => {
      chai.request
        .execute(url)
        .get('/notes')
        .end((err, res) => {
          expect(res.body).to.have.status('success');
          expect(res.body).to.have.property('data');
          done();
        });
    });
  });

  describe('Get Notes By Id', () => {
    it('should return not found', (done) => {
      const wrongId = 123;
      chai.request
        .execute(url)
        .get(`/notes/${wrongId}`)
        .end((err, res) => {
          expect(res.body).to.have.status('fail');
          expect(res.body.message).to.equal('Catatan tidak ditemukan.');
          done();
        });
    });

    it('should return success response', (done) => {
      chai.request
        .execute(url)
        .get(`/notes/${id}`)
        .end((err, res) => {
          expect(res.body).to.have.status('success');
          expect(res.body).to.have.property('data');
          done();
        });
    });
  });

  describe('Edit Notes', () => {
    it('should return not found', (done) => {
      const wrongId = 123;
      chai.request
        .execute(url)
        .put(`/notes/${wrongId}`)
        .send({
          title: 'Olahraga',
          tags: 'health',
          body: 'Berolahraga setiap sore',
        })
        .end((err, res) => {
          expect(res.body).to.have.status('fail');
          expect(res.body.message).to.equal('Gagal memperbarui');
          done();
        });
    });

    it('should return success response', (done) => {
      chai.request
        .execute(url)
        .put(`/notes/${id}`)
        .send({
          title: 'Olahraga',
          tags: 'health',
          body: 'Berolahraga setiap sore',
        })
        .end((err, res) => {
          expect(res.body).to.have.status('success');
          expect(res.body.message).to.equal('Catatan berhasil diperbarui');
          done();
        });
    });
  });

  describe('Delete Notes', () => {
    it('should return not found', (done) => {
      const wrongId = 123;
      chai.request
        .execute(url)
        .delete(`/notes/${wrongId}`)
        .end((err, res) => {
          expect(res.body).to.have.status('fail');
          expect(res.body.message).to.equal('Gagal menghapus');
          done();
        });
    });

    it('should return success response', (done) => {
      chai.request
        .execute(url)
        .delete(`/notes/${id}`)
        .end((err, res) => {
          expect(res.body).to.have.status('success');
          expect(res.body.message).to.equal('Catatan berhasil dihapus');
          done();
        });
    });
  });
});
