package nc.Naucna_centrala.Model;

public class Korisnik {
	public int Id;
	public String Ime;
	public String Prezime;
	public String Korisnicko_ime;
	public String Lozinka;
	
	
	public Korisnik() {}
	
	public Korisnik(String ime, String prezime, String korisnicko_ime, String lozinka) {
		super();
		Ime = ime;
		Prezime = prezime;
		Korisnicko_ime = korisnicko_ime;
		Lozinka = lozinka;
	}
	
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getIme() {
		return Ime;
	}
	public void setIme(String ime) {
		Ime = ime;
	}
	public String getPrezime() {
		return Prezime;
	}
	public void setPrezime(String prezime) {
		Prezime = prezime;
	}
	public String getKorisnicko_ime() {
		return Korisnicko_ime;
	}
	public void setKorisnicko_ime(String korisnicko_ime) {
		Korisnicko_ime = korisnicko_ime;
	}
	public String getLozinka() {
		return Lozinka;
	}
	public void setLozinka(String lozinka) {
		Lozinka = lozinka;
	}
	
	
}
