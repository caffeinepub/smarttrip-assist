import Map "mo:core/Map";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Nat "mo:core/Nat";

actor {
  module Inquiry {
    public type Subject = {
      #hotelBooking;
      #flightReservation;
      #visaAssistance;
      #holidayPackage;
      #general;
    };

    public type Inquiry = {
      id : Nat;
      name : Text;
      email : Text;
      phone : Text;
      subject : Subject;
      message : Text;
      timestamp : Time.Time;
    };

    public type InquiryData = {
      name : Text;
      email : Text;
      phone : Text;
      subject : Subject;
      message : Text;
    };

    public func compare(a : Inquiry, b : Inquiry) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  var nextId = 0;
  let inquiries = Map.empty<Nat, Inquiry.Inquiry>();

  public shared ({ caller }) func submitInquiry(data : Inquiry.InquiryData) : async Nat {
    let id = nextId;
    let inquiry : Inquiry.Inquiry = {
      id;
      name = data.name;
      email = data.email;
      phone = data.phone;
      subject = data.subject;
      message = data.message;
      timestamp = Time.now();
    };

    inquiries.add(id, inquiry);
    nextId += 1;
    id;
  };

  public query ({ caller }) func getInquiryCount() : async Nat {
    inquiries.size();
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry.Inquiry] {
    inquiries.values().toArray().sort();
  };
};
