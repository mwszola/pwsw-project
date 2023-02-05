namespace backend.Models;

public class Link {
    public int Id {get; set;}
    public string OriginalUrl {get; set;}
    public string UrlAlias {get;set;}
    public UserDTO owner {get; set;}

}